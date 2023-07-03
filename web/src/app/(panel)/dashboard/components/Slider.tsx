'use client'

import 'swiper/swiper.min.css'

import { PackageCheck, ShoppingBag, Users, Users2 } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MetricCard } from './MetricCard'

export type Metrics = {
  products: {
    quantity: number
  }
  sales: {
    quantity: number
  }
  customers: {
    quantity: number
  }
  employees: {
    quantity: number
  }
}

interface SliderProps {
  metrics: Metrics
}

export function Slider({ metrics }: SliderProps) {
  const { products, sales, customers, employees } = metrics

  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={1.25}
      breakpoints={{
        768: {
          slidesPerView: 2.25,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      <SwiperSlide>
        <MetricCard
          icon={<PackageCheck className="h-8 w-8 stroke-zinc-900" />}
          label="Produtos em estoque"
          quantity={products.quantity}
        />
      </SwiperSlide>

      <SwiperSlide>
        <MetricCard
          icon={<ShoppingBag className="h-8 w-8 stroke-zinc-900" />}
          label="Vendas totais"
          quantity={sales.quantity}
        />
      </SwiperSlide>

      <SwiperSlide>
        <MetricCard
          icon={<Users2 className="h-8 w-8 stroke-zinc-900" />}
          label="Clientes cadastrados"
          quantity={customers.quantity}
        />
      </SwiperSlide>

      <SwiperSlide>
        <MetricCard
          icon={<Users className="h-8 w-8 stroke-zinc-900" />}
          label="Funcionários"
          quantity={employees.quantity}
        />
      </SwiperSlide>

      <SwiperSlide>
        <MetricCard
          icon={<Users className="h-8 w-8 stroke-zinc-900" />}
          label="Funcionários"
          quantity={employees.quantity}
        />
      </SwiperSlide>

      <SwiperSlide>
        <MetricCard
          icon={<Users className="h-8 w-8 stroke-zinc-900" />}
          label="Funcionários"
          quantity={employees.quantity}
        />
      </SwiperSlide>

      <SwiperSlide>
        <MetricCard
          icon={<Users className="h-8 w-8 stroke-zinc-900" />}
          label="Funcionários"
          quantity={employees.quantity}
        />
      </SwiperSlide>
    </Swiper>
  )
}
