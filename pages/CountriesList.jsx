import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'

import styled from 'styled-components'

import './react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class CountriesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getCountries().then(countries => {
            this.setState({
                countries: countries.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { countries, isLoading } = this.state
        console.log('TCL: CountriesList -> render -> countries', countries)

        const columns = [
            {
                Header: 'Country',
                accessor: 'Country',
                filterable: true,
            },
            {
                Header: 'Capital',
                accessor: 'Capital',
                filterable: true,
            },
            {
                Header: 'Currency',
                accessor: 'Currency',
                filterable: true,
            },
            {
                Header: 'Population',
                accessor: 'Population',
                filterable: true,
            },
			{
                Header: 'EducationRank',
                accessor: 'EducationRank',
                filterable: true,
            },
        ]

        let showTable = true
        if (!countries.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={countries}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default CountriesList