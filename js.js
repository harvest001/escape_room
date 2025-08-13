document.addEventListener('DOMContentLoaded', () => {

    // 모든 모달과 클릭 오브젝트 가져오기
    const modals = document.querySelectorAll('.modal');
    const clickableObjects = {
        chalkboard: document.getElementById('chalkboard'),
        globe: document.getElementById('globe'),
        window: document.getElementById('window'),
        desks: document.getElementById('desks'),
        door: document.getElementById('door')
    };
    const modalObjects = {
        chalkboard: document.getElementById('chalkboard-modal'),
        globe: document.getElementById('globe-modal'),
        window: document.getElementById('window-modal'),
        desks: document.getElementById('desks-modal'),
        door: document.getElementById('door-modal')
    };

    // 각 오브젝트 클릭 시 해당하는 모달 열기
    for (const key in clickableObjects) {
        if (clickableObjects[key]) {
            clickableObjects[key].addEventListener('click', () => {
                modalObjects[key].style.display = 'block';
            });
        }
    }

    // 모든 닫기 버튼에 이벤트 리스너 추가
    document.querySelectorAll('.close-button').forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').style.display = 'none';
        });
    });

    // 모달 바깥 영역 클릭 시 모달 닫기
    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });

    // --- 개별 퍼즐 로직 ---

    // 1. 칠판 퍼즐
    document.getElementById('chalkboard-submit').addEventListener('click', () => {
        const answer = document.getElementById('chalkboard-answer').value.trim();
        if (answer === '광복절') {
            alert('정답입니다! 비밀번호의 첫 두 글자는 [광복] 입니다.');
            modalObjects.chalkboard.style.display = 'none';
        } else {
            alert('틀렸습니다. 다시 생각해보세요.');
        }
    });

    // 2. 지구본 퍼즐
    document.getElementById('globe-submit').addEventListener('click', () => {
        const answer = document.getElementById('globe-answer').value.trim();
        if (answer === '80') {
            alert('정답입니다! 비밀번호의 마지막 두 숫자는 [80] 입니다.');
            modalObjects.globe.style.display = 'none';
        } else {
            alert('틀렸습니다. 다시 계산해보세요.');
        }
    });

    // 3. 책상 퍼즐
    document.getElementById('desks-submit').addEventListener('click', () => {
        const answer = document.getElementById('desks-answer').value.trim();
        if (answer === '0815') {
            alert('철컥! 서랍이 열리며 안에서 작은 쪽지를 발견했습니다.\n"모든 힌트를 조합하여 문을 열고 탈출하라."');
            modalObjects.desks.style.display = 'none';
        } else {
            alert('비밀번호가 맞지 않아 서랍이 열리지 않습니다.');
        }
    });

    // 4. 문 (최종 탈출)
    document.getElementById('door-submit').addEventListener('click', () => {
        const answer = document.getElementById('door-answer').value.trim();
        if (answer === '광복80') {
            alert('철커덩!\n문이 열렸습니다. 탈출 성공! 축하합니다!');
            // 성공 후 페이지 새로고침으로 게임 리셋
            location.reload();
        } else {
            alert('비밀번호가 틀렸습니다.');
        }
    });
});