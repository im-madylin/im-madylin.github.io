export default function Tag({ children }) {
  return (
    <label className="inline-block cursor-pointer rounded-xl bg-gray-200 p-2 text-sm text-gray-500 shadow">
      {children}
    </label>
  )
}
