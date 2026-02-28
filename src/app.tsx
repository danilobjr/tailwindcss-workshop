function App() {
  return (
    <div class="flex h-dvh" data-slot="layout">
      <div
        class={`
          flex
          flex-1
          flex-col
          justify-between
          bg-[image:linear-gradient(rgba(0,0,0,.4)),_url('/img/exercise-1/news.png')]
          bg-cover
          bg-center
          bg-no-repeat
          p-12
        `}
        data-slot="featured"
      >
        <figure>
          <img class="w-50 shrink-0" src="/img/logo.svg" alt="logo" />
        </figure>

        <a
          class={`
            group/external-link
            flex
            w-fit
            cursor-pointer
            items-center
            gap-3
            text-xs
            text-white
          `}
          href="https://boanoticia.org.br/acao-beneficente-promove-doacao-de-repelentes-a-familias-no-interior-do-ceara/"
          target="_blank"
        >
          <svg
            class="size-4 shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
            <path d="m21 3-9 9" />
            <path d="M15 3h6v6" />
          </svg>

          <span
            class={`
              group-hover/external-link:underline
              group-hover/external-link:underline-offset-4
            `}
          >
            Doação de repelentes a famílias no interior do Ceará
          </span>
        </a>
      </div>

      <div
        class={`
          flex
          flex-1
          flex-col
          items-center
          p-12
        `}
        data-slot="main"
      >
        <form
          class={`
            flex
            w-80
            flex-1
            flex-col
            justify-center
            gap-7
          `}
          data-slot="form-group"
          onSubmit={(e) => {
            e.preventDefault()
            alert('Form submetido')
          }}
        >
          <div
            class={`
              flex
              flex-col
              gap-5
            `}
            data-slot="inputs"
          >
            <div
              class={`
                flex
                flex-col
                gap-2
              `}
            >
              <label
                class={`
                  text-sm-field
                  leading-none
                  font-medium
                `}
                for="doc-number"
              >
                CPF/CNPJ
              </label>
              <input
                class={`
                  h-9
                  rounded-md
                  border
                  border-input-border
                  px-3
                  text-sm
                  shadow-input
                  transition-all
                  outline-none
                  placeholder:text-placeholder
                  required:border-l-3
                  required:valid:border-l-primary
                  required:invalid:border-l-destructive
                  focus-visible:border-ring
                  focus-visible:ring
                `}
                id="doc-number"
                type="text"
                placeholder="Digite somente números"
                required
              />
            </div>

            <div
              class={`
                flex
                flex-col
                gap-2
              `}
            >
              <span
                class={`
                  flex
                  items-end
                  justify-between
                `}
              >
                <label
                  class={`
                    text-sm-field
                    leading-none
                    font-medium
                  `}
                  for="password"
                >
                  Senha
                </label>
                <a
                  class={`
                    text-sm
                    leading-none
                    text-muted-foreground
                    underline-offset-4
                    transition-colors
                    hover:text-foreground
                    hover:underline
                  `}
                  href="#"
                >
                  Esqueceu sua senha?
                </a>
              </span>
              <input
                class={`
                  h-9
                  rounded-md
                  border
                  border-input-border
                  px-3
                  text-sm
                  shadow-input
                  transition-all
                  outline-none
                  placeholder:text-placeholder
                  required:border-l-3
                  required:valid:border-l-primary
                  required:invalid:border-l-destructive
                  focus-visible:border-ring
                  focus-visible:ring`}
                id="password"
                type="password"
                required
              />
            </div>

            <label
              class={`
                flex
                cursor-pointer
                items-center
                gap-2
              `}
            >
              <div
                class={`
                  flex
                  aspect-square
                  w-4
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-input-border
                  text-sm
                  shadow-input
                  transition-all
                  outline-none
                  [corner-shape:squircle]
                  focus-within:border-ring
                  focus-within:ring
                  has-checked:border-primary
                  has-checked:bg-primary
                  has-checked:focus-within:ring-primary/25
                `}
              >
                <input
                  class={`
                    pointer-events-none
                    absolute
                    aspect-square
                    w-4 opacity-0
                  `}
                  type="checkbox"
                  aria-labelledby="keep-connected"
                />
                <svg
                  class={`
                    size-3
                    stroke-4
                    text-primary-foreground
                    opacity-0
                    transition-opacity
                    in-has-checked:opacity-100
                  `}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <span
                class={`
                  text-sm-field
                  leading-none
                  font-medium
                  select-none
                `}
                id="keep-connected"
              >
                Manter-me conectado
              </span>
            </label>
          </div>

          <div
            class={`
              flex
              flex-col
              items-center
              gap-5
            `}
            data-slot="actions"
          >
            <button
              class={`
                h-9
                w-full
                rounded-md
                bg-primary
                px-3
                text-sm
                font-medium
                text-primary-foreground
                shadow-xs
                transition-all
                outline-none
                hover:bg-primary/95
                hover:shadow-md
                focus-visible:border-ring
                focus-visible:ring
                focus-visible:ring-primary/25
              `}
            >
              Entrar
            </button>
            <a
              class={`
                flex
                gap-2
                text-sm
                leading-none
                text-muted-foreground
                underline-offset-4
                transition-colors
                hover:text-foreground
                hover:underline
              `}
              href="#"
            >
              <svg
                class="size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" />
              </svg>
              Usar certificado digital
            </a>
          </div>
        </form>

        <div className="flex items-center gap-2">
          <svg
            class="size-4 text-destructive"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
            <path d="m8 6 2-2" />
            <path d="m18 16 2-2" />
            <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
            <path d="m15 5 4 4" />
          </svg>
          <span class="text-sm">Ambiente de homologação</span>
        </div>
      </div>
    </div>
  )
}

export { App }
