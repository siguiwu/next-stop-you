import {useState,type ReactNode} from 'react';
export function LoginGate({children}:{children:ReactNode}){
 const [unlocked,setUnlocked]=useState(false),[password,setPassword]=useState(''),[error,setError]=useState(false);
 if(unlocked)return <>{children}</>;
 return <main className="login-gate"><section className="login-card"><span className="eyebrow">OUR LITTLE JOURNEY</span><h1>抬头，<br/>下一站是你。</h1><p>这是一段属于我们的旅程。<br/>输入约好的密码，翻开相遇的那一页。</p><form onSubmit={e=>{e.preventDefault();if(password==='021119'){setError(false);setPassword('');setUnlocked(true);window.scrollTo(0,0)}else setError(true)}}><label htmlFor="journey-password">我们的通行密码</label><input id="journey-password" type="password" inputMode="numeric" autoComplete="current-password" value={password} maxLength={6} required onChange={e=>{setPassword(e.target.value);setError(false)}} aria-invalid={error} aria-describedby={error?'login-error':undefined}/><button className="primary" type="submit">翻开我们的故事 <span>↗</span></button>{error&&<p id="login-error" className="login-error" role="alert">密码没有对上，再想一想我们的约定。</p>}</form><small>从书页之间，走到山海之间。</small></section></main>
}
