import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { View, Text, StyleSheet, Modal, TouchableOpacity, TextInput } from 'react-native';

class Footer extends Component {

    state = {
        modalSearch: false,
        modalAdd: false,
    }

    openModalSearch() {
        this.setState({modalSearch: true});
    }

    closeModalSearch() {
        this.setState({modalSearch: false});
    }

    openModalAdd() {
        this.setState({modalAdd: true});
    }

    closeModalAdd() {
        this.setState({modalAdd: false});
    }
    

    render() {

        return(
            <View style={ styles.container }>
                <Modal 
                    visible={this.state.modalSearch}
                    animationType={'fade'}
                    onRequestClose={() => this.closeModalSearch()}
                >
                    <View style={ styles.modalContainerSearch}>
                        <Text style={{fontSize: 18,}}>Search</Text>
                        <TextInput placeholder="Search name..." style={styles.inputSearch} />
                    </View>

                    <TouchableOpacity onPress={() => this.closeModalSearch()} style={styles.btnClose}>
                        <Text style={{textAlign: 'center', color: '#fff'}}>CLOSE</Text>
                    </TouchableOpacity>
                </Modal>

                <Modal
                    visible={this.state.modalAdd}
                    animationType={'slide'}
                    onRequestClose={() => this.closeModalAdd()}
                >
                    <View style={ styles.modalContainerAdd }>
                    <Text style={{fontSize: 20, paddingLeft: 20, marginBottom: 10,}}>Find a friend</Text>
                        <TouchableOpacity style={ styles.btnOpacity }>
                            <Text style={{fontSize: 22,}}>Karl Jasen</Text>
                            <Icon name="plus" size={20} color="dodgerblue" />
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.btnOpacity }>
                            <Text style={{fontSize: 22,}}>June Amante</Text>
                            <Icon name="plus" size={20} color="dodgerblue" />
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.btnOpacity }>
                            <Text style={{fontSize: 22,}}>Beverly Castillo</Text>
                            <Icon name="plus" size={20} color="dodgerblue" />
                        </TouchableOpacity>
                        <TouchableOpacity style={ styles.btnOpacity }>
                            <Text style={{fontSize: 22,}}>Matias Enad</Text>
                            <Icon name="plus" size={20} color="dodgerblue" />
                        </TouchableOpacity>
                    </View>
                </Modal>

                <Icon name="envelope" style={ styles.icons } onPress={() => alert('No Message Found')} />
                <Icon name="user" style={ styles.icons } />
                <Icon name="search" style={ styles.icons } onPress={() => this.openModalSearch()} />
                <Icon name="user-plus" style={{fontSize: 25}} onPress={() => this.openModalAdd()} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        padding: 15,
        backgroundColor: '#ccc',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingLeft: 30,
    },
    icons: {
        fontSize: 25,
        marginRight: 70
    },
    modalContainerSearch: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingLeft: 30,
        paddingRight: 30,
    },
    btnClose: {
        padding: 20,
        backgroundColor: 'dodgerblue',
    },
    inputSearch: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        width: '100%',
        marginTop: 10,
        paddingLeft: 10,
    },
    modalContainerAdd: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
    },
    btnOpacity: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 30,
        paddingRight: 30,
    }
});

export default Footer;