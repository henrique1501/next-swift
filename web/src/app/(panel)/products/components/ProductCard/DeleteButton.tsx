'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { PackageX, Trash2 } from 'lucide-react'
import { motion } from 'framer-motion'

export function DeleteButton() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="rounded-full p-2 transition-all hover:bg-gray-200">
          <Trash2 className="h-5 w-5 stroke-zinc-900" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="modal-overlay fixed inset-0 z-40" />

        <Dialog.Content
          className="fixed left-[50%] top-[50%] z-50 w-80 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-zinc-900 px-4 py-6"
          asChild
        >
          <motion.div
            initial={{ scale: 0, translateX: '-50%', translateY: '-50%' }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.7, type: 'spring' }}
          >
            <div className="flex justify-center">
              <PackageX className="h-10 w-10 stroke-white/60" />
            </div>

            <Dialog.Title className="pt-5 text-center font-semibold text-white">
              Remover produto
            </Dialog.Title>

            <Dialog.Description className="py-5 text-sm text-white/60">
              Por favor confirme que você realmente deseja remover este produto
              do catálogo. Não se preocupe, você poderá resgatá-lo mais tarde
              caso deseje.
            </Dialog.Description>

            <div className="flex justify-center gap-3">
              <Dialog.Close asChild>
                <button className="h-12 rounded-lg bg-zinc-800 px-5 font-semibold text-white transition-all hover:brightness-90">
                  Cancelar
                </button>
              </Dialog.Close>

              <Dialog.Close asChild>
                <button className="h-12 rounded-lg bg-purple-700 px-5 font-semibold text-white transition-all hover:brightness-75">
                  Confirmar
                </button>
              </Dialog.Close>
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
