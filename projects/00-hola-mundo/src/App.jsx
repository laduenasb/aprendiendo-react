import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App () {
	const format = (userName) => `@${userName}`
	return (
		<section className="App">
			<TwitterFollowCard isFollowing formatUserName={format} userName="midudev" name="Miguel Angel Duran" />
			<TwitterFollowCard isFollowing={false} formatUserName={format} userName="pheralb" name="Pablo Hernandez" />
			<TwitterFollowCard isFollowing formatUserName={format} userName="vxvander" name="Vardenhart" />
		</section>
	)
}