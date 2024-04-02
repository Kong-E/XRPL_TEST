from xrpl.wallet import Wallet, generate_faucet_wallet
from xrpl.clients import JsonRpcClient
from xrpl.models.requests import ServerInfo

'''
`JsonRpcClient(TESTNET_URL)`는 JSON-RPC(JSON Remote Procedure Call) 클라이언트를 생성하는 코드
이 클라이언트는 Ripple Test Network (테스트넷 URL인 "https://s.altnet.rippletest.net:51234"를 통해 접근 가능)에 연결
해당 노드와 상호작용하기 위한 인터페이스를 제공
JSON-RPC는 원격 서버(여기서는 Ripple Test Network의 노드)에 메소드를 호출하고 결과를 받아오는 프로토콜

`client` 변수를 통해 Ripple 네트워크의 다양한 기능을 사용
 예를 들어, 거래 정보 조회, 거래 제출 등의 작업을 수행 가능
'''
DEV_URL = "https://s.devnet.rippletest.net:51234/" #ripple에서 제공하는 퍼블릭 테스트 넷
client = JsonRpcClient(DEV_URL) # xrpl-py의 Client 클래스를 사용해 퍼블릭 rippled 서버에 연결

# print("client : ", client,)
# print("client type : ", type(client))

response = client.request(ServerInfo()) #서버 상태 정보를 요청하는 ServerInfo()
# print("res : ", response)

# faucet이 들어있는 계정 생성
wallet = generate_faucet_wallet(client=client, debug=True)

# 지갑 정보 확인
print("지갑 정보 : ", wallet.__dict__)

print("지갑 주소 : ", wallet.address)

# #추후에 사용할 지갑 1개 생성
# dest_wallet = generate_faucet_wallet(client)