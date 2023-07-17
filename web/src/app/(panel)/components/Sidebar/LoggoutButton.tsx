import * as Dialog from '@radix-ui/react-dialog'
import { PowerOff } from 'lucide-react'
import { motion } from 'framer-motion'

export function LoggoutButton() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="mt-auto">
          <PowerOff className="h-6 w-6 stroke-white/60 hover:stroke-purple-700" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="modal-overlay fixed inset-0 z-40" />

        <Dialog.Content
          className="fixed left-[50%] top-[50%] z-50 w-80 rounded-lg bg-zinc-900 px-4 py-6"
          asChild
        >
          <motion.div
            initial={{ scale: 0, translateX: '-50%', translateY: '-50%' }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.7, type: 'spring' }}
          >
            <div className="flex justify-center">
              <PowerOff className="h-10 w-10 stroke-white/60" />
            </div>

            <Dialog.Title className="pt-5 text-center font-semibold text-white">
              Você tem certeza?
            </Dialog.Title>

            <Dialog.Description className="py-5 text-sm text-white/60">
              Por favor confirme que você deseja sair. você terá que fazer login
              novamente para acessar o painel.
            </Dialog.Description>

            <div className="flex justify-center gap-3">
              <Dialog.Close asChild>
                <button className="h-12 rounded-lg bg-zinc-800 px-5 font-semibold text-white transition-all hover:brightness-90">
                  Cancelar
                </button>
              </Dialog.Close>

              <a
                href="/api/auth/loggout"
                className="flex h-12 items-center justify-start rounded-lg bg-purple-700 px-5 font-semibold text-white transition-all hover:brightness-75"
              >
                Sair
              </a>
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
