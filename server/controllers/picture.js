import fs from "fs";
import Picture from "../models/Picture.js";
export const create = async (req, res) => {
  
  try {
    const file = req.file;
    const picture = new Picture({
      name: file.filename,
      src: file.path,
    });

    await picture.save();
    res.json(picture);
    res.status(200).json({ message: "Imagem salva com sucesso" });
  } catch (err) {
    res.status(500).json({ message: err.message});
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
    res.status(500).json({ message: err.message });
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
