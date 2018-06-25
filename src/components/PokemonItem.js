import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import {Card, Spin} from 'antd'
const { Meta } = Card;


class PokemonItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let {current_pokemon, loading} = this.props

        if (loading) {
            return (
                <div className="example">
                  <Spin />
                </div>
            )
        }
        return (

            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="/pokeball.png" />}
                extra={<Link to='/' >X</Link>}
            >
                <Meta
                    title={current_pokemon.name}
                    description={current_pokemon.url}
                />
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        results: state.pokemons.results,
        loading: state.pokemons.loading,
        error: state.pokemons.error,
        current_pokemon: state.pokemons.current_pokemon
    }
}

export  default  connect(mapStateToProps)(PokemonItem)