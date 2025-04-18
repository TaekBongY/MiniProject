import React from 'react'
import styled from 'styled-components'

const IsOnline = ({type}) => {
    if(type === 'online') {
        return (
            <div style={{color: 'green'}}>🟢 온라인 상태입니다.</div>
        )
    }
    if(type === 'offline') {
        return (
            <div style={{color: 'red'}}>🔴 오프라인 상태입니다.</div>
        )
    }
    return (
        <div style={{color: 'gray'}}>⚪ 상태를 알 수 없습니다.</div>
    )


}

export default IsOnline
