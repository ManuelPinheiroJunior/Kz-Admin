import fs from "fs";
import Picture from "../models/Picture.js";
export const create = async (req, res) => {
  try {
    const { name } = req.body;

    const file = req.body.picture;
    console.log("🚀 ~ file: picture.js:8 ~ create ~ file:", file);
    const picture = new Picture({
      name,
      src: file.path,
    });

    await picture.save();
    res.json(picture);
  } catch (err) {
    res.status(500).json({ message: "Erro ao salvar a imagem." });
  }
};

export const remove = async (req, res) => {
  try {
    const picture = await Picture.findById(req.params.id);
    if (!picture) {
      return res.status(404).json({ message: "Imagem não encontrada" });
    }
    fs.unlinkSync(picture.src);
    await picture.remove();
    res.json({ message: "Imagem removida com sucesso" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao remover a imagem" });
  }
};

export const findAll = async (req, res) => {
  try {
    const pictures = await Picture.find();
    res.json(pictures);
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar as imagens." });
  }
};
