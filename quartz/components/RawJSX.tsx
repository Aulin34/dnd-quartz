import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  html: string
}

export default ((opts: Options) => {
  const RawJSX: QuartzComponent = ({}: QuartzComponentProps) => {
    return <div dangerouslySetInnerHTML={{ __html: opts.html }} />
  }

  return RawJSX
}) satisfies QuartzComponentConstructor