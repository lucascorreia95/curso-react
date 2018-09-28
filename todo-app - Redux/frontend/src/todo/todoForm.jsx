import React, { Component } from 'react'
import Grid from '../template/grid'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'
import { bindActionCreators } from 'redux'
import { add, changeDescription, search, clear } from './todoActions'

class TodoForm extends Component {
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    keyHandler(e){
        const { add, search, description, clear } = this.props
        if(e.key === 'Enter'){
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    componentWillMount() {
        this.props.search()
    }

    render() {
        const { add, search, description } = this.props
        return(
            <div role="form" className ="todoForm">
                <Grid cols="12 9 10">
                    <input id="description" className="form-control" 
                    placeholder="Adicione uma Tarefa" 
                    value={this.props.description}
                    onChange={this.props.changeDescription}
                    onKeyUp={this.keyHandler}/>
                </Grid>
                <Grid cols="12 3 2">
                    <IconButton style="primary" icon="plus" 
                        onClick={() => add(description)}></IconButton>
                    <IconButton style='info' icon='search'
                        onClick={search}></IconButton>
                    <IconButton style='defaut' icon='close'
                        onClick={this.props.clear}></IconButton>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToPropas = dispatch => bindActionCreators({add, changeDescription, search, clear}, dispatch)
export default connect(mapStateToProps, mapDispatchToPropas)(TodoForm)