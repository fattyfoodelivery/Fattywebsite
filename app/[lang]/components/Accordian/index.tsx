type AccordianProps = {
  title: string
  summary: string
  isOpen: boolean
  onClose: () => void
}

const Accordion = ({ title, summary, isOpen, onClose }: AccordianProps) => {
  return (
    <div
      className={`w-full space-y-4 rounded-lg bg-accordian px-6 transition-all duration-300 ${isOpen ? 'py-6' : 'py-4'}`}
    >
      <button
        className={` flex h-fit w-full  items-center justify-between overflow-hidden text-left transition-all duration-300 ${isOpen ? 'h-[144px] text-base font-semibold tracking-wider text-primary md:text-lg lg:text-xl xl:text-2xl' : 'text-sm tracking-wide md:text-base lg:text-lg'}`}
        onClick={onClose}
      >
        {title}
        <span className='self-start flex h-6 w-6 items-center justify-center rounded-full bg-primary p-[6px] text-center text-2xl text-white md:h-10 md:w-10 md:p-2'>
          {isOpen ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M5 12h14' />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2.5}
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 4.5v15m7.5-7.5h-15'
              />
            </svg>
          )}
        </span>
      </button>
      <div
        className={`${isOpen ? 'block' : 'hidden'} w-[6/7] text-xs font-medium leading-5 text-accordian-summary md:text-sm md:leading-6 lg:text-base lg:leading-[32px]`}
      >
        {summary}
      </div>
    </div>
  )
}

export default Accordion
