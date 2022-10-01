import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BTForm } from '../../store/reducers'
class DanhSachSV extends Component {
    render() {
        const { mangSV } = this.props
        return (
            <div>
                <div className='mt-5 bg-black-500p-5 bg-gray-800 text-white text-2xl font-bold p-3'>Danh sách sinh viên</div>
                <fieldset className="mt-3 w-full space-y-1 dark:text-gray-500 text-right">
                    <label for="Search" className="hidden">Search</label>
                    <div className="relative">
                        <span className="absolute inset-y-0 right-44 flex items-center pl-2">
                            <button
                                type="button" title="search" className="p-1 focus:outline-none focus:ring"

                            >
                                <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-500">
                                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                </svg>
                            </button>
                        </span>
                        <input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto border-2 border-slate-700 focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400" />
                    </div>
                </fieldset>
                <div>
                    <table className='w-full p-6 text-xs text-left whitespace-nowrap mt-3'>
                        <thead className='bg-gray-500 p-3 text-white text-lg'>
                            <tr>
                                <th className='p-3'>Mã SV</th>
                                <th className='p-3'>Họ tên</th>
                                <th className='p-3'>SĐT</th>
                                <th className='p-3'>Email</th>
                                <th className='p-3'></th>
                            </tr>
                        </thead>
                        <tbody className="border-b text-lg">
                            {mangSV.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.maSV}</td>
                                        <td>{item.name}</td>
                                        <td>{item.phoneNumber}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <button
                                                className='mr-3 rounded-lg bg-green-500 text-white'
                                                onClick={() => {
                                                    this.props.dispatch({
                                                        type: 'EDIT_USER',
                                                        payload: item.id,
                                                    })
                                                }}>
                                                <i className="fa-solid fa-pen-to-square text-14 p-4"></i>
                                            </button>
                                            <button
                                                className='rounded-lg mr-4 bg-red-500 text-white'
                                                onClick={() => {
                                                    this.props.dispatch({
                                                        type: 'DELETE_USER',
                                                        payload: item.id
                                                    })
                                                }}>
                                                <i className="fa-solid fa-trash text-14 p-4"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangSV: state.BTForm.mangSV,
    }
}

export default connect(mapStateToProps)(DanhSachSV)