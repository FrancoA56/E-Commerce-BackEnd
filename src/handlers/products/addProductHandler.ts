import { Product, ProductGallery, ProductCategory, ProductLabel, Category, Label, Brand } from "../../db";
import { ProductInput } from "../../utils/interface";

export const addProductHandler = async (
  productData: ProductInput
): Promise<InstanceType<typeof Product>> => {
  const {
    name,
    code,
    stock,
    brand,
    price,
    category, // array of category IDs
    label, // array of label IDs
    image,
    gallery, // array of image URLs
    isDisable,
    releasedAt,
    shortDescription,
    longDescription,
    instructions,
  } = productData;

  if (!name || !code || !price || !category || !image || !brand) {
    throw new Error("Missing required data to create the product");
  }

  try {
    const newProduct = await Product.create({
      name,
      code,
      price,
      stock,
      image,
      isDisable,
      releasedAt,
      shortDescription, // Se añade la descripción corta
      longDescription, // Se añade la descripción larga
      instructions, // Se añaden las instrucciones
      brandId: brand
    });


    // Asociar categorías
    if (category && category.length > 0) {
      const categories = await Category.findAll({ where: { id: category } });
      for (const cat of categories) {
        await ProductCategory.create({
          productId: newProduct.dataValues.id,
          categoryId: cat.dataValues.id,
        });
      }
    }

    // Asociar etiquetas
    if (label && label.length > 0) {
      const labels = await Label.findAll({ where: { id: label } });
      for (const lab of labels) {
        await ProductLabel.create({
          productId: newProduct.dataValues.id,
          labelId: lab.dataValues.id,
        });
      }
    }

    // Guardar la galería de imágenes
    if (gallery && gallery.length > 0) {
      const galleryPromises = gallery.map((url) =>
        ProductGallery.create({ productId: newProduct.dataValues.id, url })
      );
      await Promise.all(galleryPromises);
    }

    return newProduct;
  } catch (error) {
    throw new Error(`Failed to create product: ${(error as Error).message}`);
  }
};
