# EVM Simple Contracts

## Structure
- `simple-contracts/`: Hardhat project with 6 contracts.
- `contract-ui/`: Angular UI with MetaMask.
- `python-ui/`: Python UI for spamming.
- `.github/workflows/`: CI/CD setup.

## Setup
1. **Contracts**:
   - `cd simple-contracts`
   - `npm install`
   - Add `.env` with `PRIVATE_KEY`.
   - `npx hardhat run scripts/deploy.js --network base`
2. **Angular UI**:
   - `cd contract-ui`
   - `npm install`
   - Update `src/app/config.ts`
   - `ng serve`
3. **Python UI**:
   - `cd python-ui`
   - `pip install pyqt5 web3`
   - `python contract_spammer.py`

## CI/CD
- Deploys to Base Goerli on `master` push.
- Add `PRIVATE_KEY` and `BASE_RPC_URL` to GitHub Secrets.