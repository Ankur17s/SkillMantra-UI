import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='head-container'>

            <div className='main-img'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpItvU-y4h2ksFalgYgd92IRrwvLG2lCzWzM1nabBSP5MscQH7SvcMLi-ELoLdF4r3E0Q&usqp=CAU'/>
            </div>
            <div>
                <h1>Welcome Back!</h1>
                <div className='card-cont'>
                    <h3>Sign in</h3>
                    <span>Enter your details below</span>
                    <br />
                    <input type='text' placeholder='enter your email' />
                    <br />
                    <input type='password' placeholder='password' />

                    <div className='check-cont'>
                        <input type='checkbox' className='checkbox' />
                        <span>Remember me</span>
                        <div className='fPass'>
                            <Link to="/update">  <p>Forgot Password?</p> </Link>

                        </div>

                    </div>
                    <Button variant="dark" >Login</Button>

                    <div className='lines'>
                        <div className='line1'></div>
                        <p>OR</p>
                        <div className='line2'></div>
                    </div>

                    <div className='google-signIn'>
                        <div className='icon-box'>

                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAB9CAMAAABd7Js+AAABO1BMVEX////u7u7t7e3rQzUzqVNChfX7uwTv7+/+/v7s7Oz5+fn09PQ1f/X7uQDrQTM3gPSeuPRfk/j29fAmpkvrPS7v9f3n7fXqNyYWc/XqMyEcpEXqLhr8vwD7uz3Y5ffxfGHtTTzqKBHvZVrv+PEte/UWqFbT69qt2rj63t340873vLD1qaXylZDxgmzujYT56uXuc2jrWUvvsK3xwrrznZHxiXrue3T0raDtV0LubV7wl4PvaCv81IzziiL1mRz53LT5rw/4xFzxeyb05dDsTjKwxPWIrfX858f205j6uCf80H/5v0/33at+pfTath9bqkXNtSeRy56fsTpxrUm+sy6Hr0HpuBdYtXF9xI7C1PdFr2Jsu34xj8cwqzwynJMwo3BImMU3oYKs08U/iuVFnak/jdoAjpFwu5bA4cdqTQViAAAJpklEQVRoge1bC3caNxbWjDESkgF7BpsAjmsbMoBNgh2TJt3Nbpo6dpM2aUtfuPY63d1uN/z/X1CN5iGNHvMAknTP2XtOTi+38twPXenTnasLAL4Q27IsiHwV+2oFxKpo5arFVTtQfaONuRVLVlThqmC1wf8B/EkAVGzbDh/qqyEA2Rp6NVoroatYDaxIsiJxLMApQsJ/wkdVxYpVGkeI/DBRBQwNYd8YctWHaytWmLQaVMgnVbBa3CoMoFYWDzYQwVgFLM7hn3MrTFpTVSKpUF5skXX1AARXywGwtQA0qp0BQLYKKg0BpGJhgKhwFVi+SriVqWwsDFRSRPWfBrkVIsHKfCDM7JirRaz5VGSwAjk0BiKqaImoYsU84BsrMuXoratjQsQ2M+ALCMdg3zMVQ4LQYHh0PBrd/+ST+w9Go+PhYEwIEQi6GACRdO0sKoZkPDw+Oa01fWlQCZT9wwdHAwySVGwlqdg2UjHxJY+K0PjhyX6r1ajVamui0M/NVvNwMkQo98MyqDiyVrhKyNlJp9NIuk6gaHb2j8csqpXEEwQqrixOxeNJo9MwOY9BNA9OBithQhnAeFJrGr97QhqNwwGGKwaAH+7ndO/PQqP5aEDyAeBrABnWANsKZ4ed3O6DQNQe0/0SP0E8g5NrgBEiEZiWHQMgViHj7UfZsVcgtA7H4fHCHmzFKhatQJ4ZHRENT5tF3fvSaD0kcBVUfNQo/PWjSZjQr7osFePJQaHoJ6T1qQPzArAtBQD9GwjvHyzsnkrzBYmomLqIqZgHJpOKDxcKfyS11gjnoGI1/42yYny4YPhD/80Jm1++9yQ1i4rxyVLff601WZIJP20t5f9gkoMJUwDgUSfTR60mn8tcOiOUBsCWqVhcA2wJPE79/pTvW53W2pMn+2udTqupwKAkgCGnYvXNyBaomJEjSea/YNgy7/9ao7X/2eRoMA5kePzgtCGdVTT+edJmMxGhU+MGqDUbJ0djP2g+0QXbHA6O95vCX3T8+AdZccwDxZjwkSkANOOYjNX6ACTO2WFMmp0RAMtlxWemBdhojBwCVQDsCcNTFjfKP2BJACYGqnVOBgTGuXIiWfdVPKFLgfonwouJEgI2NpWKIZjoGajWPE7PdBE6o8fwJIN/TVkxT2TH+sy3UTsjaq6cVMlgfwSUrLiizYorRir+izYAjdMByVEqwCiK6sJJqVP9q87/E55oZldIlgLwtLz7N9X/mu9/5RUSfhzzrNiplsu7f1fW3xAXKVKZrUkqltYl8tVnFEB59/NkGA4e43hA/lc/WUWyCuKZsWMegM/LvuzufiH4bz7AfMdreMCyEvlvJTcPyKHBNjwvhyKEobY/hh+qVgxfV2MEn78IAXQekg9WrN5+Xi5zBMFCqK0RfY0oTwgUAEII7CgfCJaFr5LzalmQYCG0zvgAqFUZgxewRk+QtyFVXycA0EmoUQrM2ntp21DJipFoVYnoaRJAebf6ovk4eL6efexE0dTmlCOWUo05oQrgVbksI/hikALAYZJPzUPFuCoDKJefYyMAdLGZXy73oJaKxWMTf6kCqL4MBliaMxhtbdTrG6HEivIxUHubUClSKZSpA3CeQq9b6/mlfonkJ3AeiKj4pQrglWOsFVuwCID1LZkHNFT8lQrgOTLfmi0CIJ0JVQDVpynXdsUA3EGZANDXmjVoLtcvD0C+hEB3VQCvUy4sCi3C9Ts7yoWF/HKKdQDCzW9pXmRRMQB7MOvaTgsAqvwbE1FRAFlM+PEB6Bbh+wQgFals3TZ8KRZ9JXXxNaDPirEOwFdpmW4xANsmKua3Q3I6QOVrJF7QCWMr9kI8kLgzUpjwmeYwcj4gE2oBfLkqAOs5AJzr8oHVnoYqFYsXFtsaAHdT7o79hKQe5iT1hKr6r78BWipOZsUKE1W/+dYzb8PtHSbbviTU7UsFQn3TWSArrn53z50aichnFKhX1eBs/OLkyIqTOVm1+v29UsntmgEY6gPWjhqDniYpVQE4Yl5e/fkH6r/k9gsDcC56KgDHSs2KQ1V4N6z+WPL9l0q3XWEASCtSRUmvJgL1N456bSfTK/1P/G5WLf8YuKdTMI37gXKWIvY2VAAXSC3TgWBDC/Rqnb+Kpv+nyH+p1Pai+gC7TcnspAJv1CVQ39Nc3ytEZFskOI+qP5e4/5I7c4rUB+CeugLW1518pVrI9gENf0LaV7gAAEfjvneZE4AF79Lwf3+vJCHoAxmAsUDhbGomgG5CDQCBXmOVPAt3n4IgZ++O84suAFtE18YTdi+B4PoBBhjBN4r3AAHlt5Dogj4lg7qnOQfWe5sgamSKxxovrfptLQK3j/O0cu2sawHsqAUKY7GaXLv6OZgSc6kgVPXzv76xmVxs6dd2ZK4HUGrPuukAINFQsC93dvQA9Nd2FXJjQOBe9xEwFqks4t38Q+t/45J5Va/tAkLESaGfPb1/fxKuPVMjKOpOXff2bU+Xi+woLpiEPKBpap3r12EAoY/52KjASrA3bfvz1v71N+Uc2GCpiK6pVUdEQf+AKQgsEKWbeZf1TIWbCnW96XXbjcL0T2kd1LeEAm7eDoquYSeETtrX1++mfc/revP+9N3s2nWF4e7bZBQ29sACLRxeGoAARCSuPPT2XyIXUA7K6qajEq0BXwLzv83LIFNc97ceD4C/sXwJvcYqqBiu7cJGJgMh5pPb/0QI6tuW/touu5ltugwC920QhrqfCy/aS7YUgttff6f7sRfk4gsCWHIO3N97vQu5mTi1mc3mayA6GG+XQFC6/e9FxrVdZo6LPWWPFZiC0hwlc27ZR7QNVSrmVm+2aBjaM49k/b4ghYjibjp8tRiC9lUXrqiveL5AGFyaQ/J25yUBIDItCMFt33Rz3Rv6qSmIeyeZSv8vkK02zTQKQHDbszkCyd5JGPXuh1bm2gZCihzktLwVniSs9HDKC8F1r+eYJJ8AZRdRgmwmIjX/Rd67djsTQ5t++/RrO64WbGy2LAz7szQM9ICe9b2Y6FIbGIwVEjMAlvTi7vyKOlJBUOelm75HBK8LdFCoVKzLf7te/2p2TWMdS2k2o+lRl6ZoRTsoiJYnM1WMcNej0vdlThMzto4XeFjIA6ynx0TFIJn/cpVuLRLOeECvetJF8aQuSsXJSoBUHxBez/+Xf233sQHos2Km2oI1n4rk/DdcA7qsmK4BKPEvW82K1UjQuVX2SyuFlY1EVNFSsfm3ZmKLW3YHBVff58/9lmpm+1gAbG0I7IKqNgSiVVDTs+LiBL0UFRuyYrUqbP4tbhoVL5UVFySiD/BruxUC+AOXHnj1hbPULAAAAABJRU5ErkJggg==" alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
