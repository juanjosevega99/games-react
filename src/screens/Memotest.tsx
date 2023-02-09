import { useState } from "react"

const IMAGES = [
  'https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/react-original-wordmark.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/nodejs-original-wordmark.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/python-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/docker-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/redis-plain.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/postgresql-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/mongodb-original-wordmark.svg?size=128&color=currentColor'
].flatMap((image) => [image, image]).sort(() => Math.random() - 0.5)

export default function Memotest() {
  const [guessed, setGuessed] = useState<string[]>([])
  const [selected, getSelected] = useState<string[]>([])

  return (
    <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(128px, 1fr))', gap: 24 }}>
      {IMAGES.map((image) => (
        <li key={image} style={{ cursor: 'pointer', padding: 12, border: '1px solid #666', borderRadius: 12 }} >
          {selected.includes(image) || guessed.includes(image) ? <img key={image} alt='icon' src='https://icongr.am/clarity/search.svg?size=128&color=currentColor' />

          {selected.includes(image) || guessed.includes(image) ?
            <img key={image} alt='icon' src='https://icongr.am/clarity/search.svg?size=128&color=currentColor' />
                ) : (
              <img key={image} alt='icon' src='https://icongr.am/clarity/search.svg?size=128&color=currentColor' />
            )
          }
          <img alt='icon' src={image} />
        </li>
      ))}
    </ul>
  )
}