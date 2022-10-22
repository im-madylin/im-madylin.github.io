import Image from 'next/image'
import { BsGithub } from 'react-icons/bs'
import { AiFillMail } from 'react-icons/ai'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'

export default function AboutContent() {
  const tags = [
    {
      title: '소통',
      description:
        'IT회사의 운영/사업팀에 근무하며, !개발자로서 개발자와 밀접하게 협업한 경험이 있습니다. 이 경험으로 !개발자의 입장과 견해를 이해하고 있으며, 소통의 중요성을 인지하고 있기 때문에 !개발자와의 원활한 소통 및 협업이 가능합니다. 또한 현재 개발자로서 여러 개발자와 프로젝트를 진행하며, 개발자 간 소통에도 많은 노력을 기울이고 있습니다.',
    },
    {
      title: '성장',
      description:
        '!개발자로서 근무할 당시, 이 요청사항은 왜 개발이 불가능하다고 할까? 간단해 보이는데 왜 개발이 이렇게 오래 걸릴까? 와 같은 궁금증과 답답함을 갖게 되었습니다. 이를 조금이나마 해소하기 위해 개인적으로 코딩을 공부하여 일정 협의 등에서 배운 내용을 활용할 수 있었고, 코딩에 재미를 느껴 개발자로의 직무 전환을 위해 엘리스 프론트엔드 부트캠프 수료 후 42서울의 카뎃으로서 공부를 이어가고 있습니다.',
    },
    {
      title: '사용자 중심',
      description:
        '운영/사업팀에 근무하며 사용자의 요구사항과 불만사항을 접수하고, 이를 개선하여 사용자를 만족시키기 위해 노력하였습니다. 학사 전공과목으로 경영학과 경제학을 공부하여 고객중심의 경영의 중요성을 인지하고 있습니다. 사용자가 서비스에 대해 좋은 경험을 할 수 있도록 사용자의 입장에서 생각하는 개발을 하겠습니다.',
    },
  ]
  return (
    <div className="mx-10 mb-10 flex justify-center space-x-10">
      <div className="">
        <div className="flex border-8 border-blue-500 p-2">
          <Image
            src="/about_me.jpg"
            width={400}
            height={400}
            alt="Picture of the author"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-gray-700">
          <div className="mt-8 flex flex-row">
            <RiDoubleQuotesL className="mr-2" />
            <p className="font-bold">
              &nbsp;어떠한 위대한 일도 하루 아침에 이루어지지 않는다.&nbsp;
            </p>
            <RiDoubleQuotesR className="ml-2" />
          </div>
          <p>- Epictetus -</p>
        </div>
        <div className="mt-5 flex justify-center space-x-3">
          <a
            href="https://github.com/im-madylin"
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer text-4xl"
          >
            <BsGithub />
          </a>
          <a href="mailto:im.madylin@gmail.com">
            <AiFillMail className="cursor-pointer text-4xl" />
          </a>
        </div>
      </div>
      <div className="mr-5 flex basis-1/2 flex-col justify-center space-y-2 text-gray-700">
        {/* <span className="text-2xl font-bold">
          안녕하세요. 개발자 이하현 입니다.
        </span> */}
        <div className="mb-2 flex flex-col space-y-2">
          <div className="text-xl font-bold">✅ 이하현 == Madylin</div>
          <div className="text-lg text-gray-700">
            제 이름의 한자는 큰집 하에 나타날 현을 사용하며, &apos;큰집에 나타난
            사람&apos;이라는 뜻으로 지어주셨고, 영어 이름인 Madylin 은 &apos;탑
            위에 선 여자&apos;라는 뜻이 마음에 들어 선택하게 되었습니다.
            <br></br>두 이름의 뜻 처럼 성공하기 위해 한발짝씩 계속 나아가는
            개발자가 될 것 입니다.
          </div>
        </div>
        <div className="text-xl font-bold">
          ✅ 이하현을 표현하는 세가지 태그
        </div>
        {/* <span className="text-xl font-extrabold">
          {tags.map((content) => `#${content.title}`).join(', ')}
        </span> */}
        <ul className="space-y-2">
          {tags.map((tag, index) => (
            <li key={index}>
              <ul>
                <li className="mb-2 text-xl font-bold text-blue-500">
                  #{tag.title}
                </li>
                <li className="text-lg text-gray-700">{tag.description}</li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
