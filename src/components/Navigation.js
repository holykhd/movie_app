import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(){
    return(
        <div>
            <header id="header">
                <div className="header-area">
                    <h1 className="logo"><Link to="/"><img
                        src="https://raw.githubusercontent.com/holykhd/movie_app/master/public/img/brading_20200514.png" alt="" title=""/></Link></h1>
                    <div className="top-nav">
                        <ul className="navigation">
                            <li><Link to="/">메인</Link></li>
                            <li><Link to="/movie">영화소개</Link></li>
                            <li><Link to="/about">제품</Link></li>
                            <li><Link to="#">인재채용</Link></li>
                            <li><Link to="#">홍보센터</Link></li>
                        </ul>
                    </div>
                    <div className="quick-btn">
                        <a href="#">e-Portal 시스템</a>
                    </div>
                </div>
                <div className="mega-menu">
                    <div className="menu-bg">
                        <div className="menu-area">
                            <ul className="sub-menu">
                                <li>
                                    <a href="#">회사소개</a>
                                    <div className='sub-nav'>
                                        <ul>
                                            <li className=''><a href='/csm/environment'>안전환경경영</a></li>
                                            <li className=''><a href='/csm/law'>준법경영</a></li>
                                            <li className=''><a href='/csm/inquiry'>사이버 신문고</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#">제품</a>
                                    <div className='sub-nav'>
                                        <ul>
                                            <li className=''><a href='/recruit/people'>인재상</a></li>
                                            <li className=''><a href='/recruit/job'>직무소개</a></li>
                                            <li className=''><a href='/recruit/system'>인사제도</a></li>
                                            <li className=''><a href='/recruit/welfare'>복리후생</a></li>
                                            <li className=''><a href='/recruit/guide'>채용안내</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#">지속가능경영</a>
                                    <div className='sub-nav'>
                                        <ul>
                                            <li className=''><a href='/csm/environment'>안전환경경영</a></li>
                                            <li className=''><a href='/csm/law'>준법경영</a></li>
                                            <li className=''><a href='/csm/inquiry'>사이버 신문고</a></li>
                                        </ul>
                                    </div>

                                </li>
                                <li>
                                    <a href="#">인재채용</a>
                                    <div className='sub-nav'>
                                        <ul>
                                            <li className=''><a href='/recruit/people'>인재상</a></li>
                                            <li className=''><a href='/recruit/job'>직무소개</a></li>
                                            <li className=''><a href='/recruit/system'>인사제도</a></li>
                                            <li className=''><a href='/recruit/welfare'>복리후생</a></li>
                                            <li className=''><a href='/recruit/guide'>채용안내</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <a href="#">홍보센터</a>
                                    <div className='sub-nav'>
                                        <ul>
                                            <li className=''><a href='/promote/news'>롯데비피화학 소식</a></li>
                                            <li className=''><a href='/promote/contribution'>사회공헌</a></li>
                                            <li className=''><a href='/promote/notice'>공시정보</a></li>
                                            <li className=''><a href='/promote/history'>역사관</a></li>
                                            <li className=''><a href='/promote/media'>홍보영상</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navigation;