import dbConnect from "../config/dbConnect.js";

class HotelController {
  static buscarHotel = (req, res) => {
    dbConnect.query(
      "SELECT * FROM cadastrarhotel ORDER BY id ASC",
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
      }
    );
  };

  static buscarHotelPorId = (req, res) => {
    const id = req.params.id;

    dbConnect.query(
      `SELECT * FROM cadastrarhotel WHERE id = ${id}`,
      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
      }
    );
  };

  static cadastrarHotel = (req, res) => {
    const { name, cnpj, pais, estado, cidade } = req.body;

    dbConnect.query(
      "INSERT INTO cadastrarhotel (name, cnpj, pais, estado, cidade) VALUES ($1, $2, $3, $4, $5)",
      [name, cnpj, pais, estado, cidade]
    );

    res.status(201).send({
      message: "Hotel adicionado com sucesso!",
      body: {
        cadastrarhotel: { name, cnpj, pais, estado, cidade },
      },
    });
  };

  static atualizarHotel = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, cnpj, pais, estado, cidade } = req.body;

    dbConnect.query(
      "UPDATE cadastrarhotel SET name = $1, cnpj = $2, pais = $3, estado = $4, cidade = $5 WHERE id = $6",
      [name, cnpj, pais, estado, cidade, id],

      (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).send(`Hotel ${id} atualizada com sucesso.`);
      }
    );
  };

  static deletarHotel = (req, res) => {
    const id = req.params.id;

    dbConnect.query("DELETE FROM cadastrarhotel WHERE id = $1", [id]);

    res.status(200).send({ message: "Hotel deletado com sucesso", id });
  };
}

export default HotelController;
