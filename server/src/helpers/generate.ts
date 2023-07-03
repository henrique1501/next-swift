import { Category } from '@app/entities/Category'
import { Customer } from '@app/entities/Customer'
import { Address } from '@app/entities/Customer/Address'
import { Cep } from '@app/entities/Customer/Cep'
import { Cpf } from '@app/entities/Customer/Cpf'
import { Employee } from '@app/entities/Employee'
import { Email } from '@app/entities/Employee/Email'
import { Password } from '@app/entities/Employee/Password'
import { Product } from '@app/entities/Product'
import { Image } from '@app/entities/Product/Image'
import { Supplier } from '@app/entities/Supplier'
import { Address as SupplierAddress } from '@app/entities/Supplier/Address'
import { Cep as SupplierCep } from '@app/entities/Supplier/Cep'
import { Cnpj as SupplierCnpj } from '@app/entities/Supplier/Cnpj'
import { Cpf as SupplierCpf } from '@app/entities/Supplier/Cpf'

export class Generate {
  static product(product: any): Product {
    return new Product(
      {
        name: product.name,
        description: product.description,
        width: product.width,
        height: product.height,
        quantity: product.quantity,
        price: product.price,
        weight: product.weight,
        categories: product.categories.map(
          (category: any) =>
            new Category(
              {
                name: category.name,
                productId: category.productId,
                createdAt: category.createdAt,
              },
              category.id,
            ),
        ),
        images: product.images.map(
          (image: any) =>
            new Image(
              {
                url: image.url,
                createdAt: image.createdAt,
              },
              image.id,
            ),
        ),
        authorId: product.authorId,
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
        removedAt: product.removedAt,
      },
      product.id,
    )
  }

  static redisProduct(product: Product) {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      width: product.width,
      height: product.height,
      quantity: product.quantity,
      weight: product.weight,
      categories: product.categories?.map((category) => {
        return {
          id: category.id,
          name: category.name,
          productId: category.productId,
          createdAt: category.createdAt,
        }
      }),
      images: product.images?.map((image) => {
        return {
          id: image.id,
          url: image.url,
          createdAt: image.createdAt,
        }
      }),
      authorId: product.authorId,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
      removedAt: product.removedAt,
    }
  }

  static employee(employee: any): Employee {
    return new Employee(
      {
        name: employee.name,
        email: new Email(employee.email),
        password: new Password(employee.password),
        avatar: employee.avatar,
        gender: employee.gender,
        phone: employee.phone,
        roles: employee.roles,
        createdAt: employee.createdAt,
        updatedAt: employee.updatedAt,
        dismissedAt: employee.dismissedAt,
      },
      employee.id,
    )
  }

  static redisEmployee(employee: Employee) {
    return {
      id: employee.id,
      name: employee.name,
      email: employee.email.value,
      password: employee.password.value,
      avatar: employee.avatar,
      gender: employee.gender,
      phone: employee.phone,
      roles: employee.roles,
      createdAt: employee.createdAt,
      updatedAt: employee.updatedAt,
      dismissedAt: employee.dismissedAt,
    }
  }

  static customer(customer: any): Customer {
    return new Customer(
      {
        name: customer.name,
        email: customer.email,
        cpf: new Cpf(customer.cpf),
        ddd: customer.ddd,
        phone: customer.phone,
        address: new Address({
          cep: new Cep(customer.address.cep),
          number: customer.address.number,
          street: customer.address.street,
          uf: customer.address.uf,
          complement: customer.address.complement,
        }),
        createdAt: customer.createdAt,
        updatedAt: customer.updatedAt,
        deletedAt: customer.deletedAt,
      },
      customer.id,
    )
  }

  static redisCustomer(customer: Customer) {
    return {
      id: customer.id,
      name: customer.name,
      email: customer.email,
      cpf: customer.cpf?.value,
      ddd: customer.ddd,
      phone: customer.phone,
      address: {
        cep: customer.address.cep.value,
        number: customer.address.number,
        street: customer.address.street,
        uf: customer.address.uf,
        complement: customer.address.complement,
      },
      createdAt: customer.createdAt,
      updatedAt: customer.updatedAt,
      deletedAt: customer.deletedAt,
    }
  }

  static category(category: any): Category {
    return new Category(
      {
        name: category.name,
        productId: category.productId,
        createdAt: category.createdAt,
      },
      category.id,
    )
  }

  static redisCategory(category: Category) {
    return {
      id: category.id,
      name: category.name,
      productId: category.productId,
      createdAt: category.createdAt,
    }
  }

  static supplier(supplier: any): Supplier {
    return new Supplier(
      {
        name: supplier.name,
        email: supplier.email,
        cpf: new SupplierCpf(supplier.cpf),
        cnpj: new SupplierCnpj(supplier.cnpj),
        ddd: supplier.ddd,
        phone: supplier.phone,
        address: new SupplierAddress({
          cep: new SupplierCep(supplier.address.cep),
          number: supplier.address.number,
          street: supplier.address.street,
          uf: supplier.address.uf,
          complement: supplier.address.complement,
        }),
        createdAt: supplier.createdAt,
        updatedAt: supplier.updatedAt,
        deletedAt: supplier.deletedAt,
      },
      supplier.id,
    )
  }

  static redisSupplier(supplier: Supplier) {
    return {
      id: supplier.id,
      name: supplier.name,
      email: supplier.email,
      cpf: supplier.cpf?.value,
      cnpj: supplier.cnpj?.value,
      ddd: supplier.ddd,
      phone: supplier.phone,
      address: {
        cep: supplier.address.cep.value,
        number: supplier.address.number,
        street: supplier.address.street,
        uf: supplier.address.uf,
        complement: supplier.address.complement,
      },
      createdAt: supplier.createdAt,
      updatedAt: supplier.updatedAt,
      deletedAt: supplier.deletedAt,
    }
  }
}
