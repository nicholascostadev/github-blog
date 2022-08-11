import { IconAndText } from '../IconAndText'
import { GithubLink, ProfileContainer, ProfileInformation } from './styles'
import { AiOutlineGithub } from 'react-icons/ai'
import { FaBuilding, FaExternalLinkAlt } from 'react-icons/fa'
import { MdPeopleAlt } from 'react-icons/md'

interface ProfileProps {
  userInfo: {
    name: string
    bio: string
    followers: number
    company?: string
    login: string
  }
}

export const Profile = ({ userInfo }: ProfileProps) => {
  return (
    <ProfileContainer>
      <img
        src={`https://github.com/${userInfo.login}.png`}
        alt="Profile Picture"
      />
      <ProfileInformation>
        <GithubLink href="https://github.com/nicholascostadev">
          Github
          <FaExternalLinkAlt />
        </GithubLink>
        <strong>{userInfo.name}</strong>
        <p>{userInfo.bio}</p>
        <div>
          <IconAndText icon={<AiOutlineGithub />}>{userInfo.login}</IconAndText>
          <IconAndText icon={<FaBuilding />}>
            {userInfo.company ? userInfo.company : 'Sem afiliação'}
          </IconAndText>
          <IconAndText icon={<MdPeopleAlt />}>{userInfo.followers}</IconAndText>
        </div>
      </ProfileInformation>
    </ProfileContainer>
  )
}
