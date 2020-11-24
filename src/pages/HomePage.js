import React from 'react';
import { Hero } from '../components/Hero';
import { DownloadButton } from '../components/DownloadButton';
import { Row, Col, Image } from 'react-bootstrap';
import headshot from '../assets/headshot.jpg';
import styled from 'styled-components';

const Styles = styled.div`   

`

export const HomePage = () => (
    <Styles>
        <Hero text="Welcome" />
        <div className='page-contents'>
            <Row>
                <Col sm={4}>
                    <div className='profile-img'>
                        <Image className='profile-img' src={headshot} roundedCircle />
                    </div>
                    <div className='social-ele'>
                    </div>
                </Col>
                <Col sm={8}>
                    <div className='body'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed ipsum non sapien eleifend pellentesque. Aliquam magna diam, interdum non hendrerit sed, cursus ullamcorper augue. In sed porta mauris, vitae iaculis neque. Sed nec libero id dolor condimentum euismod. Donec at odio ex. Curabitur mollis lorem et enim fringilla tristique. Etiam finibus egestas est, ac vehicula mauris auctor in. Praesent placerat velit nunc, quis gravida lorem dapibus sed. Ut non lorem blandit, pulvinar ligula at, varius metus. Donec ut velit eros. Phasellus mi tellus, malesuada ut ante non, porta luctus tortor. Vestibulum accumsan enim vel tortor euismod porttitor.</p>
                        <p>Sed erat ipsum, fringilla eu metus blandit, viverra consequat purus. Quisque vulputate, mauris vitae interdum consequat, erat odio tristique sem, ut pretium turpis purus in arcu. Ut tincidunt orci urna, eget sagittis massa luctus non. Integer lorem enim, dignissim at luctus vitae, porttitor eleifend sem. Nam malesuada nisi nec nulla pellentesque, et mattis nibh tincidunt. Phasellus euismod orci metus, eget commodo mi consequat nec. Vestibulum eu massa eleifend, ultrices arcu sed, vestibulum enim. Nullam nec nunc vitae elit vehicula sagittis a vitae mi. Pellentesque nulla lorem, accumsan a est in, dignissim vulputate libero. Fusce facilisis quis nulla mollis viverra.</p>
                        <p>Mauris elementum magna sed dignissim hendrerit. Nam justo nulla, cursus a tortor nec, semper fermentum elit. In sed dapibus sapien. Nam sollicitudin vulputate ligula, quis suscipit felis finibus eu. Donec gravida neque eu augue laoreet, convallis posuere augue maximus. Aliquam tempor ac ligula in auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar sed mi a pharetra.</p>
                        <p>Aliquam odio arcu, efficitur eu dui sed, hendrerit tempus sapien. Integer efficitur feugiat congue. Aenean hendrerit ipsum tortor, ac malesuada massa vulputate et. Vestibulum sit amet dignissim risus, sed ornare sem. Integer et leo mauris. Vestibulum tincidunt imperdiet mollis. Maecenas vestibulum accumsan lorem blandit malesuada. Mauris in mollis dolor. Integer rutrum est libero, sed suscipit sem vestibulum ut. Morbi porta ipsum sed dictum convallis. Maecenas ultricies ipsum ac pretium tempor. Nunc leo ipsum, sodales eu erat quis, aliquet fermentum quam. Vivamus fringilla velit purus, quis lobortis mauris rutrum sodales. Sed vehicula varius mauris.</p>
                        <p>In hac habitasse platea dictumst. Proin in porttitor leo. Pellentesque bibendum nunc in turpis viverra dictum. Cras ornare vulputate fringilla. Vivamus non diam urna. Aenean in lacus sodales, fringilla odio sed, aliquam diam. Nam mollis ac lectus at vehicula. Suspendisse eu risus vitae eros molestie consectetur. Suspendisse porttitor felis ut viverra semper. Donec aliquam eu arcu in mollis. Quisque dignissim nulla vitae neque mattis, nec volutpat purus egestas. Proin pretium sit amet felis in congue. Nulla facilisi. Donec aliquet orci quis leo imperdiet, a aliquet dolor facilisis. Donec eget ligula tempus, commodo mauris vitae, euismod felis. Cras eleifend diam quis est vehicula placerat at sit amet sem.</p>
                    </div>
                </Col>
            </Row>
        </div>
        <div className='center'>
            <DownloadButton variant="secondary">Download My Resume!</DownloadButton>
        </div>
    </Styles>
)