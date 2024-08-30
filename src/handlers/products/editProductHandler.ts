import { Product, ProductGallery } from "../../db";
import { ProductInput } from "../../utils/interface";

export const editProductHandler = async (
  productId: number,
  productData: ProductInput
): Promise<InstanceType<typeof Product> | null> => {
  const {
    name,
    code,
    price,
    category,
    label,
    image,
    gallery,
    isDisable,
    releasedAt,
    shortDescription,
    longDescription,
    instructions,
  } = productData;

  // Buscar el producto existente
  const existingProduct = await Product.findByPk(productId);

  if (!existingProduct) {
    throw new Error("Product not found");
  }

  try {
    // Actualizar los campos del producto
    await existingProduct.update({
      name: name || existingProduct.dataValues.name,
      code: code || existingProduct.dataValues.code,
      price: price || existingProduct.dataValues.price,
      category: category || existingProduct.dataValues.category,
      label: label || existingProduct.dataValues.label,
      image: image || existingProduct.dataValues.image,
      isDisable:
        isDisable !== undefined
          ? isDisable
          : existingProduct.dataValues.isDisable,
      releasedAt: releasedAt || existingProduct.dataValues.releasedAt,
      shortDescription:
        shortDescription || existingProduct.dataValues.shortDescription,
      longDescription:
        longDescription || existingProduct.dataValues.longDescription,
      instructions: instructions || existingProduct.dataValues.instructions,
    });

    // Si hay imágenes en la galería, actualizarlas
    if (gallery) {
      // Eliminar las imágenes existentes
      await ProductGallery.destroy({
        where: { productId: existingProduct.dataValues.id },
      });

      // Agregar las nuevas imágenes
      const galleryPromises = gallery.map((url) =>
        ProductGallery.create({
          productId: existingProduct.dataValues.id,
          url,
        })
      );
      await Promise.all(galleryPromises);
    }

    return existingProduct;
  } catch (error) {
    throw new Error(`Failed to update product: ${(error as Error).message}`);
  }
};
