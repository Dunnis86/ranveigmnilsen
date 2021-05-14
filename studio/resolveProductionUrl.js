const previewSecret = 'MAMMA_SECRET' 
const projectUrl = 'https://ranveigmnilsen.vercel.app/'

export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${previewSecret}`
}