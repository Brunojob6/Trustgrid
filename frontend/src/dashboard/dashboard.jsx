import React, { Component } from 'react'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

class Dashboard extends Component {
    render() {
        //Extrair os atributos do summary ou destruct (atlho vs:dob)
        const { credit, debt } = this.props.summary
        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 1.0"/>
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color="green" icon="bank"
                            value={`R$ ${credit}`} text="Total de Créditos"/>
                        <ValueBox cols="12 4" color="red" icon="credit-cart"
                            value={`R$ ${debt}`} text="Total de Debitos"/>
                        
                        <ValueBox cols="12 4" color="blue" icon="money"
                            value="R$ 10" text="Valor Consolidado"/>
                    </Row>
                </Content>
            </div>
        )
    }
}
//So pra melhorar a compreensão do fluxo do redux: 1- mapStateToProps 2- Renderiza a classe
const mapStateToProps = state => ({ summary: state.dashboard.summary })

export default connect(mapStateToProps)(Dashboard)