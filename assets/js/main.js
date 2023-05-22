function criarCalculadora() {
    return {
        display: document.querySelector('.display'),

        iniciar() {
            this.cliqueBotoes()
            this.enterPressionar()
            this.pressionaBackSpace()
        },

        enterPressionar() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.btnRealizarConta()
                }
            })
        },

        pressionaBackSpace() {
            this.display.addEventListener('keydown', e => {
              if (e.keyCode === 8) {
                e.preventDefault();
                this.btnLimparDisplay();
              }
            });
          },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target

                if (el.classList.contains('btn-num')) this.btnValoresDisplay(el.innerText)
                if (el.classList.contains('btn-clear')) this.btnLimparDisplay()
                if (el.classList.contains('btn-del')) this.btnApagarUm()
                if (el.classList.contains('btn-eq')) this.btnRealizarConta()
                this.display.focus()
            })
        },

        btnValoresDisplay(valor) {
            return this.display.value += valor
        },

        btnLimparDisplay() {
            this.display.value = ''
        },

        btnApagarUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        btnRealizarConta() {
            let conta = this.display.value

            try {
                conta = eval(conta)

                if (!conta) {
                    alert('Conta inválida!')
                    return
                }

                this.display.value = conta
            } catch (e) {
                alert('Conta inválida!')
                return
            }
        }
    }
}

const calculadora = criarCalculadora()
calculadora.iniciar()