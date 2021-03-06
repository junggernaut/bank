import '../App.css'
import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    useLocation,
} from 'react-router-dom'
import styled from 'styled-components'
import { Line } from 'react-chartjs-2'

function Kindness(props) {
    const location = useLocation()
    const [value1, setValue1] = useState(location.state.value1)
    const [value2, setValue2] = useState(location.state.value2)
    const [value3, setValue3] = useState(location.state.value3)
    const [value4, setValue4] = useState(location.state.value4)
    const [value5, setValue5] = useState(location.state.value5)
    const [value6, setValue6] = useState(location.state.value6)
    const [value7, setValue7] = useState(location.state.value7)
    const [value8, setValue8] = useState(location.state.value8)
    const [val_kakao, setKakaoVal] = useState(0)
    const [val_kb, setKbVal] = useState(0)
    const [val_nh, setNhVal] = useState(0)
    const [val_sinhan, setSinhanVal] = useState(0)
    const [val_woori, setWooriVal] = useState(0)
    const [val_ibk, setIbkVal] = useState(0)
    const [val_hana, setHanaVal] = useState(0)

    // useEffect(() => {
    //     console.log('sinhan', result_sinhan)
    // }, [result_sinhan])
    // useEffect(() => {
    //     console.log('kakao', result_kakao)
    // }, [result_kakao])
    // useEffect(() => {
    //     console.log('kb', result_kb)
    // }, [result_kb])
    // useEffect(() => {
    //     console.log('nh', result_nh)
    // }, [result_nh])
    // useEffect(() => {
    //     console.log('woori', result_woori)
    // }, [result_woori])
    // useEffect(() => {
    //     console.log('ibk', result_ibk)
    // }, [result_ibk])
    // useEffect(() => {
    //     console.log('hana', result_hana)
    // }, [result_hana])

    useEffect(() => {
        onclick_kindness()
    }, [])

    function handleClick(e) {
        window.location.href = '/Next/Mobilebanking'
    }
    // const [arrChip, setArrChip] = useState('')
    // const handleChange = (name) => {
    //     setArrChip(name)
    // }

    var data = {
        labels: [
            '????????????',
            '????????????',
            '????????????',
            '????????????',
            '????????????',
            '????????????',
            '???????????????',
        ],
        datasets: [
            // {
            //     type: 'line',
            //     label: 'Dataset 1',
            //     borderColor: 'rgb(54, 162, 235)',
            //     borderWidth: 5,
            //     data: [1, 2, 3, 4, 5, 1],
            // },
            {
                type: 'bar',
                label: '10????????? ???????????? / ?????? : 2021??? ?????????????????????',
                backgroundColor: 'rgb(255, 99, 132)',
                data: [
                    val_hana,
                    val_sinhan,
                    val_kb,
                    val_woori,
                    val_nh,
                    val_ibk,
                    val_kakao,
                ],
                yAxisID: 'y',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                fill: 'start',
            },
            // {
            //     type: 'bar',
            //     label: 'Dataset 3',
            //     backgroundColor: 'rgb(75, 192, 192)',
            //     data: [1, 2, 3, 4, 5, 6],
            // },
        ],
    }

    const Container = styled.div`
        width: 90vw;
        max-width: 900px;
    `
    const options = {
        spanGaps: true,
        maxBarThickness: 30,
        grouped: true,
        interaction: {
            mode: 'index',
        },
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    padding: 10,
                    // font: {
                    //     family: "'Noto Sans KR', 'serif'",
                    //     lineHeight: 1,
                    // },
                },
            },
            // tooltip: {
            //     backgroundColor: 'rgba(124, 35, 35, 0.4)',
            //     padding: 10,
            //     bodySpacing: 5,
            //     // bodyFont: {
            //     //     font: {
            //     //         family: "'Noto Sans KR', sans-serif",
            //     //     },
            //     // },
            //     usePointStyle: true,
            //     filter: (item) => item.parsed.y !== null,
            //     callbacks: {
            //         title: (context) => context[0].label,
            //         label: (context) => {
            //             let label = context.dataset.label + '' || ''

            // return context.parsed.y !== null
            //     ? label + ': ' + context.parsed.y + '???'
            //     : null
            // },
            // },
            // },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawTicks: true,
                    tickLength: 4,
                    color: '#E2E2E230',
                },
                axis: 'x',
                position: 'bottom',

                ticks: {
                    color: 'white',
                    padding: 5,
                    font: {
                        size: 17,
                    },
                },
            },
            y: {
                type: 'linear',
                grid: {
                    color: '#E2E2E230',
                },
                afterDataLimits: (scale) => {
                    scale.max = scale.max * 1.2
                },
                axis: 'y',
                display: true,
                position: 'left',
                ticks: { beginAtZero: true, reverse: true, start: 0 },
                title: {
                    align: 'center',
                    minRotation: 90,
                    display: true,
                    align: 'end',
                    color: 'white',
                    font: {
                        size: 17,
                        family: "'Noto Sans KR', sans-serif",
                        weight: 300,
                    },
                    text: '??????: 10?????? ??? ????????????',
                },
            },
            //            y_sub: {
            //               position: 'right',
            //                title: {
            //                    display: true,
            //                    align: 'end',
            //                    color: '#808080',
            // font: {
            //     size: 12,
            //     family: "'Noto Sans KR', sans-serif",
            //     weight: 300,
            // },
            // text: '??????: ???',
            //     },
            //                    afterDataLimits: (scale) => {
            //                        scale.max = scale.max * 1.2
            //                    },
            //                },
            //            },
        },
    }

    function calculate(json) {
        for (let i = 0; i < 7; i++) {
            if (json[i].??????ID == 88) {
                //sinhan
                // let val = 5 - i > 2 ? 2 * (5 - i) : 4
                // setSinhan(result_sinhan + star * val)
                setSinhanVal(json[i].?????????Data)
                console.log('val_sinhan', val_sinhan)
            } else if (json[i].??????ID == 90) {
                //kakao
                //let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //setKakao(result_kakao + star * val)
                setKakaoVal(json[i].?????????Data)
                console.log('val_kakao', val_kakao)
            } else if (json[i].??????ID == 4) {
                //kb
                //let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //setKb(result_kb + star * val)
                setKbVal(json[i].?????????Data)
                console.log('val_kb', val_kb)
            } else if (json[i].??????ID == 11) {
                //nh
                //let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //setNh(result_nh + star * val)
                setNhVal(json[i].?????????Data)
                console.log('val_nh', val_nh)
            } else if (json[i].??????ID == 20) {
                //woori
                //let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //setWoori(result_woori + star * val)
                setWooriVal(json[i].?????????Data)
                console.log('val_woori', val_woori)
            } else if (json[i].??????ID == 3) {
                // ibk
                //let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //setIbk(result_ibk + star * val)
                setIbkVal(json[i].?????????Data)
                console.log('val_ibk', val_ibk)
            } else if (json[i].??????ID == 81) {
                //hana
                //let val = 5 - i > 2 ? 2 * (5 - i) : 4
                //setHana(result_hana + star * val)
                setHanaVal(json[i].?????????Data)
                console.log('val_hana', val_hana)
            } else {
                console.log('no bank')
            }
        }
    }

    function onclick_kindness() {
        fetch('http://localhost:3001/get_kindness', {
            method: 'post', //????????????
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(),
        })
            .then((res) => res.json())
            .then((json) => {
                //console.log(json)
                calculate(json)
            })
    }
    return (
        <div className="graphcontainer">
            <div class="graphheader">
            <h2>
                    <br></br>
                    <br></br>
                    ????????? ????????? ?????? ??????????????????
                    <br></br>
                    (???????????? ???????????? ???????????? ????????????)
                    <br></br>
            </h2>
            </div>
            <div class="nav">
                <ul>
                    <li1>
                        <Container>
                            <Line type="line" data={data} options={options} />
                        </Container>

                    </li1>
                    <li2>
                        <h4>[?????? ?????? ??????]</h4>
                        <h4>
                        ????????? ????????? ?????????????????? ???????????? ???????????? 
                        </h4>
                        <h4>     
                        ???????????? ????????? ???????????? ??????
                        </h4>
                        
                    </li2>
                </ul>


            </div>

        <div class="graphelse">    
            <Link
                to={{
                    pathname: '/Next/Mobilebanking',
                    state: {
                        value1: value1,
                        value2: value2,
                        value3: value3,
                        value4: value4,
                        value5: value5,
                        value6: value6,
                        value7: value7,
                        value8: value8,
                    },
                }}
            >
                <button className="button-1">??????</button>
            </Link>
            {/* <h2>????????? : {value2}</h2> */}
            {/* <div>?????? ??????????????? : {result_kakao}</div> */}
        </div>
    </div>
    )
}
export default Kindness
