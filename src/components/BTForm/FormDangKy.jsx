import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addUser, updateUser } from '../../store/actions'

class FormDangKy extends Component {
    stateDefault = {
        maSV: '',
        name: '',
        phoneNumber: '',
        email: '',
    }
    state = {
        values: this.stateDefault,
        errors: {}
    }

    handleState = (event) => {
        const { name, value } = event.target
        this.setState({
            values: {
                ...this.state.values,
                [name]: value,
            }
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()

        if (!event.target.checkValidity()) {
            return
        }

        if (this.props.selectedUser) {
            this.props.dispatch(updateUser(this.state.values))
        } else {
            this.props.dispatch(addUser(this.state.values))
        }

        this.setState({
            values: this.stateDefault
        })
    }
    static getDerivedStateFromProps = (nextProps, currentState) => {
        console.log(nextProps)
        console.log(currentState)
        if (nextProps.selectedUser && nextProps.selectedUser.id !== currentState.values.id) {
            currentState.values = nextProps.selectedUser
        }
        return currentState
    }


    handleBlur = (event) => {
        const { validationMessage, name, title, minLength, maxLength, validity: { valueMissing, tooShort, patternMismatch } } = event.target

        let mess = '';
        if (valueMissing) {
            mess = `${title} không được bỏ trống!`
        }
        if (tooShort) {
            mess = `${title} phải từ ${minLength} đến ${maxLength} kí tự!`
        }
        if (patternMismatch) {
            mess = `${title} không đúng định dạng!`
        }

        this.setState({
            errors: {
                ...this.state.errors,
                [name]: mess
            }
        })
    }



    render() {
        const { maSV, name, phoneNumber, email } = this.state.values
        return (
            <div>
                <form id='form' noValidate onSubmit={this.handleSubmit}>
                    <div className='bg-black-500p-5 bg-gray-800 text-white text-2xl font-bold p-3'>Thông tin sinh viên</div>
                    <div className='grid grid-cols-2 gap-5 mt-5'>
                        <div>
                            <p className='font-semibold text-18'>Mã SV</p>
                            <input
                                required
                                type='number'
                                minLength={1}
                                maxLength={5}
                                value={maSV}
                                name='maSV'
                                title='Mã SV'
                                placeholder='Mã SV'
                                className="rounded-sm p-2 w-full mt-2 border-2 border-black"
                                onChange={this.handleState}
                                onBlur={this.handleBlur}
                            />
                            <span className='text-red-500 text-14'>{this.state.errors.maSV}</span>
                        </div>
                        <div>
                            <p className='font-semibold text-18'>Họ tên</p>
                            <input
                                required
                                type='text'
                                value={name}
                                name='name'
                                title='Họ tên'
                                placeholder='Họ tên'
                                className="rounded-sm p-2 w-full mt-2 border-2 border-black"
                                onChange={this.handleState}
                                onBlur={this.handleBlur}
                            />
                            <span className='text-red-500 text-14'>{this.state.errors.name}</span>
                        </div>
                        <div>
                            <p className='font-semibold text-18'>Số điện thoại</p>
                            <input
                                required
                                type='number'
                                value={phoneNumber}
                                name='phoneNumber'
                                title='Số điện thoại'
                                placeholder='Số điện thoại'
                                className="rounded-sm p-2 w-full mt-2 border-2 border-black"
                                onChange={this.handleState}
                                onBlur={this.handleBlur}
                            />
                            <span className='text-red-500 text-14'>{this.state.errors.phoneNumber}</span>
                        </div>
                        <div>
                            <p className='font-semibold text-18'>Email</p>
                            <input
                                required
                                type='email'
                                value={email}
                                name='email'
                                title='Email'
                                placeholder='Email'
                                pattern='^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
                                className="rounded-sm p-2 w-full mt-2 border-2 border-black"
                                onChange={this.handleState}
                                onBlur={this.handleBlur}
                            />
                            <span className='text-red-500 text-14'>{this.state.errors.email}</span>
                        </div>
                    </div>
                    <div className='mt-5 flex justify-center'>
                        <button
                            type='submit'
                            className='p-3 bg-blue-400 rounded-md text-white text-xl cursor-pointer hover:bg-blue-700 mr-5'>
                            Đăng ký</button>
                        <button
                            type='submit'
                            className='p-3 bg-yellow-400 rounded-md text-white text-xl cursor-pointer hover:bg-yellow-700 mr-5 '>Cập nhật</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.BTForm,
    }
}

export default connect(mapStateToProps)(FormDangKy)