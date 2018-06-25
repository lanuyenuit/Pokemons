import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import {Card, Spin} from 'antd'
const { Meta } = Card

class PokemonItem extends Component {
  render () {
    let {img, loading, name} = this.props

    if (loading) {
      return (
        <div className='example'>
          <Spin />
        </div>
      )
    }
    let isSprites = (typeof(img) === 'undefined')
    return (
      <div>
        { !isSprites &&
          <Card
            hoverable
            style={{ width: '50%' }}
            cover={<img alt='example' src={img} style={{ width: '96px'}}/>}
            extra={<Link to='/' >X</Link>}
          >
            <Meta
              title={name}
              // description={}
            />
          </Card>
        }

      </div>


    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.pokemons.loading,
    name: state.pokemons.pokemonItem.name,
    img: state.pokemons.pokemonItem.sprites.back_default
  }
}

export default connect(mapStateToProps)(PokemonItem)
