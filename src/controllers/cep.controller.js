const yup = require('yup');
const axios = require('axios');


exports.getCEP = async (req, res) => {
    try {
        const shema = yup.object().shape({
            cep: yup.string().required()
        });

        if (!(await shema.isValid(req.params))) {
            return res.status(400).send({
                messege: 'Invalid CEP',
                body: req.body
            });
        }

        let Getcep = await axios.get(`https://viacep.com.br/ws/${req.params.cep}/json/`);

        if (Getcep.data.erro) {
            return res.status(400).send({

                messege: 'CEP not found',
                body: req.body
            });

        } else {
            const { cep, logradouro, bairro, localidade, uf } = Getcep.data;
            return res.status(200).send({
                messege: 'CEP found',
                body: { cep, logradouro, bairro, localidade, uf }
            });
        }
    } catch (error) {
        return res.status(400).send({
            messege: 'CEP not found',
            body: req.body
        });

    }

}

