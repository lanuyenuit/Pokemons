import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import {Card, Spin} from 'antd'
const { Meta } = Card

class PokemonItem extends Component {
  render () {
    let {img, loading} = this.props

    if (loading) {
      return (
        <div className='example'>
          <Spin />
        </div>
      )
    }
    return (

      <Card
        hoverable
        style={{ width: '50%' }}
        cover={<img alt='example' src={img} style={{ width: '96px'}}/>}
        extra={<Link to='/' >X</Link>}
      >
        <Meta
          // description={currentPokemon.url}
        />
      </Card>


    )
  }
}

const mapStateToProps = state => {
  console.log("ww",state.pokemons.sprites.back_default)
  return {
    img: state.pokemons.sprites.back_default
  }
}

export default connect(mapStateToProps)(PokemonItem)
