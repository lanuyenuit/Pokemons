import React, { Component } from 'react'
import './App.css'

import { Table, Layout, Spin } from 'antd'
import 'antd/dist/antd.css'

import {Link} from 'react-router-dom'

import { connect } from 'react-redux'
import store from './myStore'
import {
  fetchPokemons,
  fetchPokemonItem,
} from './actions/index'

const columns = [{
  title: 'URL',
  dataIndex: 'url',
  key: 'url'
}, {
  title: 'Name',
  dataIndex: 'name',
  key: 'name'
}, {
  title: 'Action',
  key: 'action',
  render: (text, record, _) => {
    let id = record.url.slice(-2).charAt(0)
    return (
      <span onClick={() => store.dispatch(fetchPokemonItem(record.url))}>
        <Link to={`/pokemonItem/${id}`} >Detail</Link>
      </span>
    )
  }
}]

class App extends Component {
  componentDidMount () {
    this.props.dispatch(fetchPokemons())
  }

  render () {
    const { error, loading, results } = this.props
    const data = results

    if (error) {
      return <div>Error! {error.message}</div>
    }

    if (loading) {
      return (
        <div className='example'>
          <Spin />
        </div>
      )
    }

    return (
      <div>
        <Layout>
          <Table
            columns={columns}
            dataSource={data}
            rowKey={(record) => {
              let id = record.url.slice(-2).charAt(0)
              return id
            }}
          />
        </Layout>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    results: state.pokemons.results,
    loading: state.pokemons.loading,
    error: state.pokemons.error
  }
}

export default connect(mapStateToProps)(App)
