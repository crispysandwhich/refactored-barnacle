// import classes from '../styles/subscription.module.css'

export default function Subsribtion () {
    return (
        <div className={classes.subscriptionBanner}>

            <div className={classes.subTop}>
                <h2>What are you waiting for.</h2>
                <form method="post">
                    <input type="email" placeholder="email" name="email" />
                    <button type="submit">New</button>
                </form>
            </div>

            <div className={classes.subBelow}>
                <h2>Fri3nds</h2>
                {/* Array */}
                <div className={classes.subs}>
                    <p>
                        userName: <span>Bobby Wasabi</span>
                        profile: <a href="/"> View</a> 
                    </p>
                </div>
            </div>

        </div> 
    )
}