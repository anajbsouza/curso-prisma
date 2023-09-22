import { Product } from "@prisma/client";
import prisma from "../database/database";

async function getProducts() {
  return prisma.product.findMany();
}

async function getProduct(id: number) {
  return prisma.product.findUnique({
    where: { id }
  })
}

async function createProduct(product: Product) {
  return prisma.product.create({
    data: product
  })
}

const productRepository = {
  getProduct,
  getProducts,
  createProduct
}

export default productRepository;