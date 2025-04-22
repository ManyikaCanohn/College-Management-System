import React from 'react'
import { useNavigate } from 'react-router-dom'

const Quickview = () => {

    const navi = useNavigate() 

    return (
        <div className='dashboard-container'>
            <div>
                <h3>School of Business</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, eveniet aut magnam qui officiis excepturi quia ab non voluptatibus ad reiciendis quasi veniam vero impedit maiores aperiam placeat. Possimus, officiis.</p>
                <button onClick={() => navi('/business ')} className='buttons'>View</button>
            </div>
            <div>
                <h3>School of Health Sciences</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, eveniet aut magnam qui officiis excepturi quia ab non voluptatibus ad reiciendis quasi veniam vero impedit maiores aperiam placeat. Possimus, officiis.</p>
                <button onClick={() => navi('/health')} className='buttons'>View</button>
            </div>
            <div>
                <h3>School of Education</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, eveniet aut magnam qui officiis excepturi quia ab non voluptatibus ad reiciendis quasi veniam vero impedit maiores aperiam placeat. Possimus, officiis.</p>
                <button onClick={() => navi('/education')} className='buttons'>View</button>
            </div>
            <div>
                <h3>School of Media</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, eveniet aut magnam qui officiis excepturi quia ab non voluptatibus ad reiciendis quasi veniam vero impedit maiores aperiam placeat. Possimus, officiis.</p>
                <button onClick={() => navi('/media')} className='buttons'>View</button>
            </div>
            <div>
                <h4>Open Distance and Free Learning</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, eveniet aut magnam qui officiis excepturi quia ab non voluptatibus ad reiciendis quasi veniam vero impedit maiores aperiam placeat. Possimus, officiis.</p>
                <button onClick={() => navi('/opendistance')} className='buttons'>View</button>
            </div>
            <div>
                <h3>Lorem</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, eveniet aut magnam qui officiis excepturi quia ab non voluptatibus ad reiciendis quasi veniam vero impedit maiores aperiam placeat. Possimus, officiis.</p>
                <button className='buttons'>View</button>
            </div>
            <div>
                <h3>Lorem</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, eveniet aut magnam qui officiis excepturi quia ab non voluptatibus ad reiciendis quasi veniam vero impedit maiores aperiam placeat. Possimus, officiis.</p>
                <button className='buttons'>View</button>
            </div>
            <div>
                <h3>Lorem</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, eveniet aut magnam qui officiis excepturi quia ab non voluptatibus ad reiciendis quasi veniam vero impedit maiores aperiam placeat. Possimus, officiis.</p>
                <button className='buttons'>View</button>
            </div>
        </div>
    )
}

export default Quickview