const surveyForm = document.getElementById('survey-form');
const questionsContainer = document.getElementById('questions');
const resultContainer = document.getElementById('result');
const answersContainer = document.getElementById('answers');

// Sample questions
const questions = [
  // Nhóm 1: Lựa chọn đúng/sai
  { text: '1. Trận Điện Biên Phủ diễn ra vào năm 1954? (Nhóm 1)', type: 'trueFalse' },
  { text: '2. Công ty Apple được Steve Jobs, Steve Wozniak và Bill Gates thành lập? (Nhóm 1)', type: 'trueFalse' },
  { text: '3. Sự kiện Sputnik 1, vệ tinh nhân tạo đầu tiên, được phóng vào năm 1957 bởi Liên Xô? (Nhóm 1)', type: 'trueFalse' },
  { text: '4. Mỹ là quốc gia đầu tiên sử dụng bom nguyên tử trong chiến tranh? (Nhóm 1)', type: 'trueFalse' },
  { text: '5. Đảng Cộng sản Việt Nam được thành lập vào năm 1969? (Nhóm 1)', type: 'trueFalse' },
  { text: '6. Chiến tranh thế giới thứ nhất diễn ra từ năm nào đến năm nào? (Nhóm 1)', type: 'trueFalse' },
  { text: '7. Albert Einstein được trao giải Nobel về lĩnh vực nào? (Nhóm 1)', type: 'trueFalse' },
  { text: '8. Chủ tịch Hồ Chí Minh đã qua đời vào năm nào? (Nhóm 1)', type: 'trueFalse' },
  { text: '9. Công dân Mỹ có quyền bầu cử Tổng thống từ 18 tuổi. (Nhóm 1)', type: 'trueFalse' },
  { text: '10. Trái đất là hành tinh thứ mấy từ Mặt trời? (Nhóm 1)', type: 'trueFalse' },
  
  // Nhóm 2: Chọn 1 trong 4 đáp án
  { text: '11. Ai là Tổng thống Mỹ hiện nay? (Nhóm 2)', type: 'multipleChoice', choices: ['A. Barack Obama', 'B. Donald Trump', 'C. Joe Biden', 'D. George W. Bush'] },
  { text: '12. Ai là Tổng thống Nga hiện nay? (Nhóm 2)', type: 'multipleChoice', choices: ['A. Vladimir Putin', 'B. Dmitry Medvedev', 'C. Boris Yeltsin', 'D. Mikhail Gorbachev'] },
  { text: '13. Ai là Thủ tướng Anh hiện tại? (Nhóm 2)', type: 'multipleChoice', choices: ['A. David Cameron', 'B. Boris Johnson', 'C. Theresa May', 'D. Tony Blair'] },
  { text: '14. Ai là Chủ tịch Trung Quốc hiện nay? (Nhóm 2)', type: 'multipleChoice', choices: ['A. Hu Jintao', 'B. Jiang Zemin', 'C. Xi Jinping', 'D. Deng Xiaoping'] },
  { text: '15. Ai là Thủ tướng Nhật Bản hiện nay? (Nhóm 2)', type: 'multipleChoice', choices: ['A. Shinzo Abe', 'B. Yoshihide Suga', 'C. Naoto Kan', 'D. Junichiro Koizumi'] },
  { text: '16. Ai là Tổng thống Hàn Quốc hiện nay? (Nhóm 2)', type: 'multipleChoice', choices: ['A. Moon Jae-in', 'B. Lee Myung-bak', 'C. Park Geun-hye', 'D. Kim Dae-jung'] },
  { text: '17. Ai là Tổng thống Pháp hiện nay? (Nhóm 2)', type: 'multipleChoice', choices: ['A. Nicolas Sarkozy', 'B. François Hollande', 'C. Emmanuel Macron', 'D. Jacques Chirac'] },
  { text: '18. Ai là Tổng thống Brazil hiện nay? (Nhóm 2)', type: 'multipleChoice', choices: ['A. Luiz Inácio Lula da Silva', 'B. Dilma Rousseff', 'C. Michel Temer', 'D. Jair Bolsonaro'] },
  { text: '19. Ai là Thủ tướng Úc hiện nay? (Nhóm 2)', type: 'multipleChoice', choices: ['A. Julia Gillard', 'B. Tony Abbott', 'C. Malcolm Turnbull', 'D. Scott Morrison'] },
  { text: '20. Ai là Tổng thống Argentina hiện nay? (Nhóm 2)', type: 'multipleChoice', choices: ['A. Néstor Kirchner', 'B. Cristina Fernández de Kirchner', 'C. Mauricio Macri', 'D. Alberto Fernández'] },
  // Nhóm 3: Chọn nhiều đáp án
 { text: '21. Các quốc gia nào là thành viên của G20? (Nhóm 3)', type: 'multipleAnswer', choices: ['A. Hoa Kỳ', 'B. Trung Quốc', 'C. Ấn Độ', 'D. Nga'] },
 { text: '22. Những quốc gia nào nằm ở châu Phi? (Nhóm 3)', type: 'multipleAnswer', choices: ['A. Kenya', 'B. Nigeria', 'C. Argentina', 'D. Mexico'] },
 { text: '23. Các quốc gia nào tạo thành Liên minh châu Á-Thái Bình Dương (APEC)? (Nhóm 3)', type: 'multipleAnswer', choices: ['A. Nhật Bản', 'B. Hàn Quốc', 'C. Australia', 'D. Chile'] },
 { text: '24. Những ngôn ngữ nào được sử dụng nhiều nhất trên thế giới? (Nhóm 3)', type: 'multipleAnswer', choices: ['A. Tiếng Anh', 'B. Tiếng Tây Ban Nha', 'C. Tiếng Trung', 'D. Tiếng Pháp'] },
 { text: '25. Các quốc gia nào tạo thành vùng Benelux? (Nhóm 3)', type: 'multipleAnswer', choices: ['A. Bỉ', 'B. Hà Lan', 'C. Luxembourg', 'D. Thụy Sĩ'] },
 { text: '26. Quốc gia nào là nơi có nhiều người nói tiếng Nga nhất? (Nhóm 3)', type: 'multipleAnswer', choices: ['A. Nga', 'B. Ukraine', 'C. Belarus', 'D. Kazakhstan'] },
 { text: '27. Các quốc gia nào thuộc Vương quốc Liên hiệp Anh và Bắc Ireland (UK)? (Nhóm 3)', type: 'multipleAnswer', choices: ['A. Anh', 'B. Scotland', 'C. Wales', 'D. Ireland'] },
 { text: '28. Những ngôn ngữ nào được sử dụng chính thức tại Liên Hợp Quốc? (Nhóm 3)', type: 'multipleAnswer', choices: ['A. Tiếng Anh', 'B. Tiếng Pháp', 'C. Tiếng Tây Ban Nha', 'D. Tiếng Trung'] },
 { text: '29. Các thành phố nào được biết đến với biệt danh "Thành phố không bao giờ ngủ"? (Nhóm 3)', type: 'multipleAnswer', choices: ['A. New York City', 'B. Paris', 'C. Las Vegas', 'D. Tokyo'] },
 { text: '30. Các quốc gia nào tạo thành vùng Scandinavia? (Nhóm 3)', type: 'multipleAnswer', choices: ['A. Thụy Điển', 'B. Na Uy', 'C. Đan Mạch', 'D. Phần Lan'] },

  // Nhóm 4: Trả lời tự luận
 { text: '31. Tại sao việc giữ gìn sức khỏe tinh thần quan trọng và bạn thường thực hiện những hoạt động gì để duy trì sức khỏe tinh thần của mình? (Nhóm 4)', type: 'freeText' },
 { text: '32. Bạn nghĩ gì về ảnh hưởng của công nghệ số và truyền thông xã hội đối với giao tiếp và mối quan hệ giữa con người? (Nhóm 4)', type: 'freeText' },
 { text: '33. Hãy chia sẻ ý kiến của bạn về tầm quan trọng của việc giáo dục giới tính trong xã hội hiện nay và cách thức để thúc đẩy sự bình đẳng giới trong giáo dục? (Nhóm 4)', type: 'freeText' },
 { text: '34. Bạn nghĩ gì về tầm quan trọng của việc phát triển kỹ năng mềm như giao tiếp, làm việc nhóm, và quản lý thời gian trong kỷ nguyên số? (Nhóm 4)', type: 'freeText' },
 { text: '35. Hãy chia sẻ ý kiến của bạn về những thách thức và cơ hội mà người trẻ gặp phải trong xã hội hiện đại? (Nhóm 4)', type: 'freeText' },
 { text: '36. Bạn nghĩ gì về tầm quan trọng của việc duy trì mối quan hệ giữa các quốc gia và cách thức để giải quyết xung đột quốc tế? (Nhóm 4)', type: 'freeText' },
 { text: '37. Hãy chia sẻ quan điểm của bạn về sự cần thiết của việc thúc đẩy và bảo vệ nhân quyền trên toàn thế giới? (Nhóm 4)', type: 'freeText' },
 { text: '38. Bạn nghĩ gì về vai trò của truyền thông và công nghệ thông tin trong việc tạo ra sự đa dạng và phong phú trong văn hoá và xã hội? (Nhóm 4)', type: 'freeText' },
 { text: '39. Hãy chia sẻ ý kiến của bạn về tầm quan trọng của việc tham gia vào hoạt động cộng đồng và tình nguyện để xây dựng một xã hội tốt đẹp hơn? (Nhóm 4)', type: 'freeText' },
 { text: '40. Bạn nghĩ gì về tầm quan trọng của việc bảo vệ và phát triển các giá trị văn hóa truyền thống trong một thế giới đa văn hóa? (Nhóm 4)', type: 'freeText' }
];


// Function to generate questions
function generateQuestions() {
  let html = '';
  questions.forEach((question, index) => {
    html += `<div>${question.text}</div>`;
    if (question.type === 'trueFalse') {
      html += `<label><input type="radio" name="question${index}" value="true"> Đúng</label>`;
      html += `<label><input type="radio" name="question${index}" value="false"> Sai</label>`;
    } else if (question.type === 'multipleChoice') {
      question.choices.forEach(choice => {
        html += `<label><input type="radio" name="question${index}" value="${choice}"> ${choice}</label>`;
      });
    } else if (question.type === 'multipleAnswer') {
      question.choices.forEach(choice => {
        html += `<label><input type="checkbox" name="question${index}[]" value="${choice}"> ${choice}</label>`;
      });
    } else if (question.type === 'freeText') {
      html += `<textarea name="question${index}" rows="4" cols="40"></textarea>`;
    }
  });
  questionsContainer.innerHTML = html;
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(surveyForm);
  let answers = '';
  for (const [key, value] of formData.entries()) {
    answers += `${key}: ${value}\n`;
  }
  answersContainer.innerText = answers;
  resultContainer.style.display = 'block';
}

// Generate questions when the page loads
generateQuestions();

// Listen for form submission
surveyForm.addEventListener('submit', handleSubmit);
// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(surveyForm);
  let totalScore = 0;
  let answers = '';
  
  questions.forEach((question, index) => {
    const key = `question${index}`;
    const userAnswer = formData.getAll(key);
    
    if (question.type === 'trueFalse' || question.type === 'multipleChoice') {
      const correctAnswer = question.type === 'trueFalse' ? 'true' : question.choices.find(choice => choice.startsWith('A'));
      
      if (userAnswer.includes(correctAnswer)) {
        totalScore++;
      }
    } else if (question.type === 'multipleAnswer') {
      const correctAnswers = question.choices.filter(choice => choice.startsWith('A'));
      const userCorrectAnswers = correctAnswers.every(answer => userAnswer.includes(answer));
      
      if (userCorrectAnswers && userAnswer.length === correctAnswers.length) {
        totalScore++;
      }
    } else if (question.type === 'freeText') {
      // Always count free text questions
      totalScore++;
    }
    
    answers += `${key}: ${userAnswer}\n`;
  });
  
  answersContainer.innerText = answers;
  resultContainer.style.display = 'block';
  
  // Display total score
  resultContainer.innerText = `Total Score: ${totalScore}/40`;
}
