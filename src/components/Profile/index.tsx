import { IconAndText } from '../IconAndText'
import { ProfileContainer, ProfileInformation } from './styles'
import { AiOutlineGithub } from 'react-icons/ai'
import { FaBuilding, FaExternalLinkAlt } from 'react-icons/fa'
import { MdPeopleAlt } from 'react-icons/md'
import { AbsoluteLink } from '../../styles/global'

interface ProfileProps {
  userInfo: {
    name: string
    bio: string
    followers: number
    company?: string
    login: string
    url: string
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
        <AbsoluteLink href={userInfo.url} rel="noreferrer" target="_blank">
          GITHUB
          <FaExternalLinkAlt />
        </AbsoluteLink>
        <strong>{userInfo.name}</strong>
        <p>{userInfo.bio}</p>
        <div>
          <IconAndText icon={<AiOutlineGithub />}>
            <a
              href={`https://github.com/${userInfo.login}`}
              rel="noreferrer"
              target="_blank"
            >
              {userInfo.login}
            </a>
          </IconAndText>
          <IconAndText icon={<FaBuilding />}>
            {userInfo.company ?? 'Sem afiliação'}
          </IconAndText>
          <IconAndText icon={<MdPeopleAlt />}>{userInfo.followers}</IconAndText>
        </div>
      </ProfileInformation>
    </ProfileContainer>
  )
}
