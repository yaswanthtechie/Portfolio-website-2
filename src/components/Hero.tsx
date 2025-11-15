import { ChevronRight } from "lucide-react"
import { Link as ScrollLink } from "react-scroll"

const HeroSection = () => {
  const title = ".NET Full Stack Developer"
  const subtitle = {
    regular: "Hi, I'm Deekshitha NV. I build ",
    gradient: "modern web applications.",
  }
  const description = "I design and build scalable, secure, and user-friendly web applications using ASP.NET Core, Angular, and SQL Server."

  return (
    <section id="hero" className="relative">
      <div className="max-w-screen-xl z-10 mx-auto px-4 flex items-center justify-center min-h-screen gap-12 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-sm text-gray-400 group font-sans mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent border-[2px] border-white/5 rounded-3xl w-fit">
            {title}
            <ChevronRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300" />
          </h1>
          <h2 className="text-4xl tracking-tighter font-heading bg-clip-text text-transparent mx-auto md:text-6xl bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
            {subtitle.regular}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-orange-200">
              {subtitle.gradient}
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            {description}
          </p>
          <div className="flex items-center justify-center pt-4">
            <span className="relative inline-block overflow-hidden rounded-full p-[1.5px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 text-xs font-medium backdrop-blur-3xl">
                <ScrollLink to="projects" smooth={true} duration={500} offset={-80} className="inline-flex rounded-full text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/5 via-purple-400/20 to-transparent text-white border-input border-[1px] hover:bg-gradient-to-tr hover:from-zinc-300/10 hover:via-purple-400/30 transition-all sm:w-auto py-3 px-8">
                  View Projects
                </ScrollLink>
              </div>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
