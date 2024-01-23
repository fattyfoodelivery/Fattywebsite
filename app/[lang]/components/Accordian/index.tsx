type AccordianProps = {
  title: string
  summary: string
  isOpen: boolean
  onClose: () => void
}

const Accordion = ({ title, summary, isOpen, onClose }: AccordianProps) => {
  return (
    <div
      className={`w-full transition-all duration-300 space-y-4 rounded-lg bg-accordian px-6 ${isOpen ? 'py-6' : 'py-4'}`}
    >
      <button
        className={` flex h-[40px] w-full  items-center justify-between overflow-hidden text-left transition-all duration-300 ${isOpen ? 'h-[144px] text-2xl font-semibold tracking-wider text-primary' : 'text-lg tracking-wide'}`}
        onClick={onClose}
      >
        {title}
        <span className='flex h-10 w-10 items-center justify-center rounded-full bg-primary p-2 text-center text-4xl text-white'>
          {isOpen ? '-' : '+'}
        </span>
      </button>
      <div
        className={`${isOpen ? 'block' : 'hidden'} text-base font-medium leading-[32px] text-accordian-summary w-[784px]`}
      >
        {summary}
      </div>
    </div>
  )
}

export default Accordion
