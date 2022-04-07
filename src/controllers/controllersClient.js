const Sequelize = require("sequelize");
const { format } = require("date-fns");

module.exports = {
  async cadastrar(req, res) {
    const dbConfig = require("../config/dbconfig");
    const sequelize = new Sequelize(dbConfig);
    const date = format(new Date(), "yyyyMMdd HH:mm:ss");

    const { client, cpf, andreass, telephone } = req.body;

    try {
      if (client !== "" && cpf !== "" && andreass !== "" && telephone !== "") {
        const insert = `
            INSERT 
                INTO cadclientes ( 
                client
                ,cpf_client
                ,address_client 
                ,telephone
                ,created_at) 
            VALUES(
                '${client}',
                '${cpf}',
                '${andreass}',
                '${telephone}',
                '${date}'
            )
        `;

        await sequelize.query(insert, {
          type: Sequelize.QueryTypes.INSERT,
        });

        console.log("Cliente cadastrado com sucesso!");
        return res.status(200).json({ msg: "Cliente cadastrado com sucesso!" });
      }
      return res.status(500).json({ msg: "Falha ao cadastrar cliente!" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ msg: "Falha ao cadastrar cliente!", error: error });
    }
  },

  async excluir(req, res) {
    const dbConfig = require("../config/dbconfig");
    const sequelize = new Sequelize(dbConfig);

    const { client, cpf } = req.body;

    try {
      const del = `
            DELETE 
	            FROM cadclientes 
		            WHERE cpf_client  = '${cpf}' 
		            or client = '${client}';
        `;

      await sequelize.query(del, {
        type: Sequelize.QueryTypes.DELETE,
      });

      console.log("Cliente excluido com sucesso!");
      return res.status(200).json({
        msg: "Cliente excluido com sucesso!",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Erro ao excluir cliente!",
        error: error,
      });
    }
  },
};
