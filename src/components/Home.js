import React from "react";

function Home(){
    return <div>
        <section className="main-visual"></section>
        <section className="main-section01">
            <div className="innor">
                <div className="content">
                    <h3>롯데비피화학</h3>
                    <p>롯데비피화학은 1989년 영국의 BP사와의 합작 계약을 통해 설립되어 고부가가치 정밀 화학제품인 초산과 <br className="hide_768" />그 유도체인
                        VAM(초산비닐)을 생산하는 국내 유일의 기업입니다.</p>
                </div>
            </div>
        </section>
        <section className="main-section02">
            <div className="innor">
                <ul>
                    <li>
                        <p>1989년 설립된 <br />국내 유일의 초산생산 기업</p>
                        <h4><span className="counting" id="count_1" data-time="800" data-num="31">31</span>년</h4>
                    </li>
                    <li>
                        <p>자산총계 <br />(2019년 기준)</p>
                        <h4><span className="counting" id="count_2" data-time="1200" data-num="4613">4,613</span>억</h4>
                    </li>
                    <li>
                        <p>매출총액 <br />(2019년 기준)</p>
                        <h4><span className="counting" id="count_3" data-time="1600" data-num="5558">5,558</span>억</h4>
                    </li>
                    <li>
                        <p>영업이익 <br />(2019년 기준)</p>
                        <h4><span className="counting" id="count_4" data-time="2000" data-num="693">693</span>억</h4>
                    </li>
                </ul>
            </div>
        </section>
        <section className="main-section03">
            <div className="innor">
                <ul>
                    <li>
                        <a href="/">
                            <h5>초산</h5>
                            <div className="img">
                                <img src="http://www.lottebp.com/uploads/media/pdt_ic01.png" alt=""/>
                            </div>
                            <h4>650,000</h4>
                            <p>(연간생산량/톤)</p>
                            <div className="more"><span>자세히보기</span></div>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <h5>초산</h5>
                            <div className="img">
                                <img src="http://www.lottebp.com/uploads/media/pdt_ic02.png" alt=""/>
                            </div>
                            <h4>650,000</h4>
                            <p>(연간생산량/톤)</p>
                            <div className="more"><span>자세히보기</span></div>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <h5>초산</h5>
                            <div className="img">
                                <img src="http://www.lottebp.com/uploads/media/pdt_ic03.png" alt=""/>
                            </div>
                            <h4>650,000</h4>
                            <p>(연간생산량/톤)</p>
                            <div className="more"><span>자세히보기</span></div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <section className="main-section04">
            <div className="innor">
                <div className="flex">
                    <div className="imgBox">
                        <img src="http://www.lottebp.com/uploads/media/people.png" alt=""/>
                    </div>
                    <div className="txtBox">
                        <div className="title"><h3><span>LOTTE BP</span>PEOPLE</h3></div>
                        <p className="description">롯데비피화학과 함께 할 핵심가치를 보유하고 비전 지향적인 글로벌 인재를 찾습니다.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="main-section05">
            <div className="innor" style={{padding: "0 200px"}}>
                <ul className="incrut-list">
                    <li>
                        <a href="/recruit/people" title="인재상 페이지로 이동">
                            <h4>인재상</h4>
                            <p>세계 속에 우뚝 선 아름다운 롯데의 <br className="hide_1280" />꿈에 동참할 젊은이를 초대합니다.</p>
                            <p className="detail">VIEW DETAIL</p>
                        </a>
                    </li>
                    <li>
                        <a href="/recruit/system" title="인사제도 페이지로 이동">
                            <h4>인사제도</h4>
                            <p>공정하고 투명한 심사기준으로 <br className="hide_1280" />업무 수행 능력에 따른 평가제도</p>
                            <p className="detail">VIEW DETAIL</p>
                        </a>
                    </li>
                    <li>
                        <a href="/recruit/welfare" title="복리후생 페이지로 이동">
                            <h4>복리후생</h4>
                            <p>본인과 가족의 건강, 자녀의 교육과 <br className="hide_1280" />노후까지 함께 지원하고 고민합니다.</p>
                            <p className="detail">VIEW DETAIL</p>
                        </a>
                    </li>
                    <li>
                        <a href="/recruit/guide" title="채용안내 페이지로 이동">
                            <h4>채용안내</h4>
                            <p>롯데비피화학에서 글로벌 인재로 <br className="hide_1280" />거듭날 인재를 기다리고 있습니다.</p>
                            <p className="detail">VIEW DETAIL</p>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </div>
}

export default Home;