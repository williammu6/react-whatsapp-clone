import React from "react";

const avatarImage = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDYxLjc5OTggNjEuNzk5OCI+PHRpdGxlPkF2YXRhciBVc2VyIGhhY2tlcjwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9Il/DjsOTw4hfMSIgZGF0YS1uYW1lPSLigJTDjsOTw4ggMSI+PGNpcmNsZSBjeD0iMzAuODk5OSIgY3k9IjMwLjg5OTkiIHI9IjMwLjg5OTkiIGZpbGw9IiM1OGIwZTAiLz48cGF0aCBmaWxsPSIjMzAyZTMzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMy4yNTUgMzguNjhsMTUuOTA3LjE0NnYxNS42MDJsLTE1LjkwNy0uMTQ3VjM4LjY4eiIvPjxwYXRoIGQ9Ik01My40NzggNTEuOTkzQTMwLjgxMyAzMC44MTMgMCAwIDEgMzAuOSA2MS44YTMxLjIyNSAzMS4yMjUgMCAwIDEtMy44MzctLjIzN0EzNC4wNzIgMzQuMDcyIDAgMCAxIDE1LjkgNTcuOTE5YTMxLjAzNiAzMS4wMzYgMCAwIDEtNy44NTctNi4yMjVsMS4yODQtMy4xIDEzLjkyNS02LjIxMmMwIDQuNTM1IDEuMzEgMTAuMDIgNy40MzkgMTAuMTEzIDcuNTcuMTEzIDguNDctNS40NzUgOC40Ny0xMC4xNWwxMi43OSA2LjI4MnoiIGZpbGw9IiM4NTdhNmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik0zMS40NjIgNTIuNDk1Yy0zLjM0Mi01LjQ3Mi05LjM4OC02LjI4Ny0xMS4zNTktNi42LTUuNDItLjg2LTE0LjU2LTQuMjgtOC41NjQtOS43MiAxMC43NjUtOS43NjQgNi44OTgtMjIuMDMyIDE5LjUxMy0yMi4wMzIgMTMuNDcgMCA4Ljg3MyAxMi4yNjggMTkuNjM4IDIyLjAzMiA1Ljk5NyA1LjQ0LTMuMTQzIDguODYtOC41NjUgOS43MmExNC4yOTIgMTQuMjkyIDAgMCAwLTEwLjY2MyA2LjZ6IiBmaWxsPSIjMzAyZTMzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBkPSJNMzkuOTY0IDQyLjI1MmMtMS4xMjUgNC4wMS00LjAwOCA2LjM5Ny04LjU5OCA2LjIwNy0zLjk0LS4xNjMtNy4yOTctMi4zOTctOC4xMS02LjIwNHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC4xOCIvPjxwYXRoIGQ9Ik0zMS4xMjkgOC40MzJjMjEuMjgxIDAgMTIuOTg3IDM1LjI2NiAwIDM1LjI2Ni0xMi4yNjcgMC0yMS4yODEtMzUuMjY2IDAtMzUuMjY2eiIgZmlsbD0iI2ZmZThiZSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTTE4LjM2NSAyNC4wNDVjLTMuMDcgMS4zNC0uNDYgNy42ODcgMS40NzIgNy42NThhMzEuOTczIDMxLjk3MyAwIDAgMS0xLjQ3Mi03LjY1OHoiIGZpbGw9IiNmOWRjYTQiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik00NC4xNCAyNC4wNDVjMy4wNyAxLjMzOS40NiA3LjY4Ny0xLjQ3MSA3LjY1OGEzMS45OTMgMzEuOTkzIDAgMCAwIDEuNDcxLTcuNjU4eiIgZmlsbD0iI2Y5ZGNhNCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTTE5LjExMyAyNS43MDZjLTIuODMtNC45NTgtMi43ODMtOS4zNzUtMS4zNjItMTEuODE3IDIuMDQ4LTMuNTIgNC45MjItMy42ODggNS4zMTUtNC41MTcgNC4wMjUtOC40NzkgMjQuODM5LTIuMDQ4IDIzLjk3IDExLjA5YTE0Ljc5OCAxNC43OTggMCAwIDAtMS41MjItMi40ODZzLS4wNzUgNC45OTEtMS40MzcgNi45NTdjLTEuNjQuNDY0LTE1LjA2MS4yMzktMjAuMDUzLTkuOTQ4LTQuMDA2IDIuMjY4LTUuMDYgNy4wMTUtNC45MSAxMC43MnoiIGZpbGw9IiM5Njk2OTYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik0zMS4xNSA0Ni41NDNjLTIuNjYuMDIyLTE1LjYxNy00LjAyMi0xMi42MS0yNi4wNDUgMCAwIC42NSA5LjkxNiAyLjc3NSAxMi43ODggMS4zODIgMS44NjggMi42MjUgMi41NyAzLjgyLjc0NiAxLjI0OC0xLjkgMy45NDYtMy40NzMgNi4wMzgtMS42NzcgMS43MzctMS44NSA0Ljg0OC0uMjEyIDYuMDg0IDEuNjc3IDEuMTk1IDEuODIzIDIuNDQgMS4xMjMgMy44MjItLjc0NiAyLjEyNS0yLjg3MiAyLjU4Ni0xMi40NTYgMi41ODYtMTIuNDU2IDMuNDU2IDIzLjYtOS44NTUgMjUuNzM1LTEyLjUxNSAyNS43MTN6IiBmaWxsPSIjOTY5Njk2IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBkPSJNMjYuNTI3IDM2LjgwMmE3LjExOCA3LjExOCAwIDAgMSA0LjU2OC0yLjA5NiA3LjI5IDcuMjkgMCAwIDEgNC41MDMgMi4wOTljLS43ODguNTI1LTUuODc0IDEuNzM3LTkuMDcxLS4wMDN6IiBmaWxsPSIjZmZlOGJlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48cGF0aCBkPSJNMjYuNjExIDUxLjI5N2EyOS4zNSAyOS4zNSAwIDAgMC04LjE3MS0zLjUwMWMtNC43NzgtLjc1OC0xMy40MjMtMS41MTgtMTEuMjcxLTEwLjA4NkMxMi4wMjMgMTguMzggMTguODUgMy42ODggMzEuNDU3IDMuODdjMTIuODM2LjE4NCAxOS4wOSAxNS44IDIzLjg0IDMzLjg2NSAxLjkwNCA3LjIzOC02Ljc5IDkuMzEzLTExLjUwOCAxMC4wNkEyMS4xMjkgMjEuMTI5IDAgMCAwIDM2IDUxLjE0Yy02Ljk2MyA0Ljc2NS0xLjgxMiA0LjctOS4zODkuMTU4em00Ljg1MSAxLjE5OGExNC4yOTIgMTQuMjkyIDAgMCAxIDEwLjY2My02LjZjNS40MjItLjg2IDE0LjU2Mi00LjI4IDguNTY1LTkuNzItMTAuNzY1LTkuNzY0LTYuMTY3LTIyLjAzMi0xOS42MzgtMjIuMDMyLTEyLjYxNSAwLTguNzQ4IDEyLjI2OC0xOS41MTMgMjIuMDMyLTUuOTk3IDUuNDQgMy4xNDMgOC44NiA4LjU2NCA5LjcyIDEuOTcuMzEzIDguMDE3IDEuMTI3IDExLjM2IDYuNnoiIGZpbGw9IiM3ZDcwNjIiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjxwYXRoIGQ9Ik0yNC4yMDIgNTAuMjEzczUuOTg4IDMuMjU2IDcuNTg4IDcuOTkyYzEuNjEtNS4xMjEgNy42MjctOC4zMjcgNy42MjctOC4zMjdTMzMuMDcgNTIuMzMgMzEuNyA1NS41MzRjLS45NzMtMS43MjItMi43MDctMy40LTcuNDk3LTUuMzIxeiIgZmlsbD0iIzMwMmUzMyIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9nPjwvZz48bWV0YWRhdGE+PHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpyZGZzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzAxL3JkZi1zY2hlbWEjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPjxyZGY6RGVzY3JpcHRpb24gYWJvdXQ9Imh0dHBzOi8vaWNvbnNjb3V0LmNvbS9sZWdhbCNsaWNlbnNlcyIgZGM6dGl0bGU9ImF2YXRhcix1c2VyLGhhY2tlciIgZGM6ZGVzY3JpcHRpb249ImF2YXRhcix1c2VyLGhhY2tlciIgZGM6cHVibGlzaGVyPSJJY29uc2NvdXQiIGRjOmRhdGU9IjIwMTctMDktMjIiIGRjOmZvcm1hdD0iaW1hZ2Uvc3ZnK3htbCIgZGM6bGFuZ3VhZ2U9ImVuIj48ZGM6Y3JlYXRvcj48cmRmOkJhZz48cmRmOmxpPkRtaXRyaXkgQm9uZGFyY2h1azwvcmRmOmxpPjwvcmRmOkJhZz48L2RjOmNyZWF0b3I+PC9yZGY6RGVzY3JpcHRpb24+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PC9zdmc+";


const Channel = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center justify-evenly bg-gray-100 h-16 border-b border-r border-gray-600 p-2">
      <img src={avatarImage} alt="avatar" className="w-12 h-12"/>
      <div className="flex flex-col ml-4 justify-around h-full flex-1">
        <span className="font-semibold text-gray-700 truncate">{ name }</span>
        <span className="text-sm text-gray-600 truncate">Last message</span>
      </div>
      <span className="text-xs text-gray-600">Yesterday</span>
    </div>
  );
};

const ChatsHeader = () => {
  return (
    <div className="flex h-20 items-center justify-start p-4 bg-gray-700 border-b border-r border-gray-800 text-gray-100">
      <img src={avatarImage} alt="avatar" className="w-20 h-20 mr-4 py-2"/>
    </div>
  );
}

const Chats = () => {
  return (
    <div className="w-4/12 bg-gray-300 h-full">
      <ChatsHeader />
      <Channel name="Contact 01"/>
      <Channel name="Contact 02"/>
      <Channel name="Contact 03"/>
    </div>
  );
};

export default Chats;