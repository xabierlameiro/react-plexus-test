const PRUEBA_KO = 'pruebaKO123'

const RESPONSE_OK = { status: 200 }
const RESPONSE_KO = { status: 401 }

const submitForm = (pass, repass, optionalQuestion) =>
    new Promise((resolve, reject) =>
        setTimeout(
            () =>
                pass !== PRUEBA_KO ? resolve(RESPONSE_OK) : reject(RESPONSE_KO),
            2000
        )
    )

export { submitForm }
