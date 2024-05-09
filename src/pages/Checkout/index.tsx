import { useState } from 'react'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { InputGroup, Row, TabButton } from './styles'

import { useFormik } from 'formik'
import boleto from '../../assets/images/boleto.svg'
import cartao from '../../assets/images/card.svg'

import * as Yup from 'yup'

export const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cardDisplayName: '',
      cpfCardOwner: '',
      cardNumber: '',
      cardExpiration: '',
      cardYearExpiration: '',
      cardCVV: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      email: Yup.string()
        .email('Insira um e-mail válido')
        .required('O campo é obrigatório'),
      cpf: Yup.string()
        .min(14, 'O campo precisa ter 14 caracteres')
        .max(14, 'O campo precisa ter 14 caracteres')
        .required('O campo é obrigatório'),
      deliveryEmail: Yup.string()
        .email('Insira um e-mail válido')
        .required('O campo é obrigatório'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os e-mails devem ser iguais')
        .required('O campo é obrigatório'),

      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardExpiration: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardYearExpiration: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardCVV: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <>
      <form onSubmit={form.handleSubmit} className="container">
        <Card title="Dados de cobrança">
          <>
            <Row>
              <InputGroup>
                <label htmlFor="fullName">Nome Completo</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('fullName', form.errors.fullName)}
                </small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.values.email}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('email', form.errors.email)}</small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="cpf">CPF</label>
                <input
                  id="cpf"
                  type="text"
                  name="cpf"
                  value={form.values.cpf}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('cpf', form.errors.cpf)}</small>
              </InputGroup>
            </Row>
            <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
            <Row>
              <InputGroup>
                <label htmlFor="deliveryEmail">E-mail</label>
                <input
                  id="email"
                  type="deliveryEmail"
                  name="deliveryEmail"
                  value={form.values.deliveryEmail}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('deliveryEmail', form.errors.deliveryEmail)}
                </small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="confirmDeliveryEmail">Confirme o e-mail</label>
                <input
                  id="confirmDeliveryEmail"
                  type="email"
                  name="confirmDeliveryEmail"
                  value={form.values.confirmDeliveryEmail}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                {getErrorMessage(
                  'confirmDeliveryEmail',
                  form.errors.confirmDeliveryEmail
                )}
              </InputGroup>
            </Row>
          </>
        </Card>

        <Card title="Pagamento">
          <>
            <TabButton
              onClick={() => setPayWithCard(false)}
              isActive={!payWithCard}
            >
              <img src={boleto} alt="Boleto Bancário" />
              Boleto Bancário
            </TabButton>
            <TabButton
              onClick={() => setPayWithCard(true)}
              isActive={payWithCard}
            >
              <img src={cartao} alt="Cartão de crédito" />
              Cartão de crédito
            </TabButton>
            <div className="margin-top">
              {payWithCard ? (
                <>
                  <Row>
                    <InputGroup>
                      <label htmlFor="cardOwner">
                        Nome do titular do cartão
                      </label>
                      <input
                        id="cardOwner"
                        type="text"
                        name="cardOwner"
                        value={form.values.cardOwner}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      {getErrorMessage('cardOwner', form.errors.cardOwner)}
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cpfCardOwner">
                        CPF do titular do cartão
                      </label>
                      <input
                        id="cpfCardOwner"
                        type="text"
                        name="cpfCardOwner"
                        value={form.values.cpfCardOwner}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      {getErrorMessage(
                        'cpfCardOwner',
                        form.errors.cpfCardOwner
                      )}
                    </InputGroup>
                  </Row>
                  <Row marginTop="24px">
                    <InputGroup>
                      <label htmlFor="cardDisplayName">Nome no cartão</label>
                      <input
                        id="cardDisplayName"
                        type="text"
                        name="cardDisplayName"
                        value={form.values.cardDisplayName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      {getErrorMessage(
                        'cardDisplayName',
                        form.errors.cardDisplayName
                      )}
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <input
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      {getErrorMessage('cardNumber', form.errors.cardNumber)}
                    </InputGroup>
                    <InputGroup maxWidth="123px">
                      <label htmlFor="cardExpiration">Mês de vencimento</label>
                      <input
                        id="cardExpiration"
                        type="text"
                        name="cardExpiration"
                        value={form.values.cardExpiration}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      {getErrorMessage(
                        'cardExpiration',
                        form.errors.cardExpiration
                      )}
                    </InputGroup>
                    <InputGroup maxWidth="123px">
                      <label htmlFor="cardYearExpiration">
                        Ano de vencimento
                      </label>
                      <input
                        id="cardYearExpiration"
                        type="text"
                        name="cardYearExpiration"
                        value={form.values.cardYearExpiration}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      {getErrorMessage(
                        'cardYearExpiration',
                        form.errors.cardYearExpiration
                      )}
                    </InputGroup>
                    <InputGroup maxWidth="48px">
                      <label htmlFor="cardCVV">CVV</label>
                      <input
                        id="cardCVV"
                        type="text"
                        name="cardCVV"
                        value={form.values.cardCVV}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      {getErrorMessage('cardCVV', form.errors.cardCVV)}
                    </InputGroup>
                  </Row>
                  <Row marginTop="24px">
                    <InputGroup maxWidth="150px">
                      <label htmlFor="installments">Parcelamento</label>
                      <select
                        id="installments"
                        name="installments"
                        value={form.values.installments}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      >
                        <option>1x de R$200,00</option>
                        <option>2x de R$200,00</option>
                        <option>3x de R$200,00</option>
                      </select>
                      {getErrorMessage(
                        'installments',
                        form.errors.installments
                      )}
                    </InputGroup>
                  </Row>
                </>
              ) : (
                <p>
                  Ao optar por essa forma de pagamento, é importante lembrar que
                  a confirmação pode levar até 3 dias úteis, devido aos prazos
                  estabelecidos pelas instituições financeiras. Portanto, a
                  liberação do código de ativação do jogo adquirido ocorrerá
                  somente após a aprovação do pagamento do boleto.
                </p>
              )}
            </div>
          </>
        </Card>
        <Button type="button" title="Clique aqui para finalizar a compra">
          Finalizar compra
        </Button>
      </form>
    </>
  )
}
