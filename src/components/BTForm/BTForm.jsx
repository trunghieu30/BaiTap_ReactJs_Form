import React, { Component } from 'react'
import DanhSachSV from './DanhSachSV'
import FormDangKy from './FormDangKy'

export default class BTForm extends Component {
    render() {
        return (
            <div className='max-w-7xl m-auto'>
                <FormDangKy />
                <DanhSachSV />
            </div>
        )
    }
}
