import React from 'react'
import { ContentWrapper } from 'vtex.my-account-commons'
import styles from './index.css'



export const headerConfig = () => {
  const backButton = {
    title: "Mesa de Regalos",
    path:  '/mdr',
    styles: "color:red;"
  }

  return {
    titleId: `orders.titleNull`,
    backButton,
    namespace: 'vtex-account__edit-order-id',
  }
}

const MyPlugin = () => {


  const renderWrapper = children => {
    return (
      <ContentWrapper className={styles.titlePage} {...headerConfig()}>{() => children}</ContentWrapper>
    )
  }

  return renderWrapper(
    <div className="center w-100 helvetica">
        Hola Mundo
      </div>
  )
}


export default MyPlugin
